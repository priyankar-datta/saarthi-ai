from fastapi import APIRouter, HTTPException


class Lead(BaseModel):
name: str | None = None
age: int
occupation: str | None = None
monthly_income: int | None = None
dependents: int = 0
goal: str | None = None
notes: str | None = None
language: str = "en"


async def call_openai_chat(prompt, temperature=0.2, max_tokens=400, model="gpt-4o-mini"):
# wrapper for OpenAI Chat API (ChatCompletion style). Adapt if using other API variants.
try:
resp = openai.ChatCompletion.create(
model=model,
messages=[{"role": "user", "content": prompt}],
temperature=temperature,
max_tokens=max_tokens,
)
return resp['choices'][0]['message']['content']
except Exception as e:
raise e


@router.post("/score_lead")
async def score_lead(lead: Lead):
prompt = BASE_PROMPT + "\nLead: " + lead.json()
try:
content = await call_openai_chat(prompt, temperature=0.2, max_tokens=400)
# Try safe JSON parse
try:
parsed = json.loads(content)
except Exception:
# Fallback: attempt to extract JSON substring
import re
m = re.search(r"\{[\s\S]*\}", content)
if m:
parsed = json.loads(m.group(0))
else:
raise ValueError("Model did not return valid JSON")
return parsed
except Exception as e:
raise HTTPException(status_code=500, detail=str(e))


@router.post("/generate_script")
async def generate_script(lead: Lead):
# Score lead first
rec = await score_lead(lead)
lead_json = lead.json()
if lead.language and lead.language.lower()[:2] in ("hi", "hn"):
prompt = SCRIPT_PROMPT_HINGLISH.format(lead=lead_json, rec=json.dumps(rec))
temp = 0.7
else:
prompt = SCRIPT_PROMPT_ENGLISH.format(lead=lead_json, rec=json.dumps(rec))
temp = 0.6
try:
script = await call_openai_chat(prompt, temperature=temp, max_tokens=300)
return {"script": script, "rec": rec}
except Exception as e:
raise HTTPException(status_code=500, detail=str(e))