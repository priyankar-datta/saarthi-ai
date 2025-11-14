# Prompts Library — Saarthi AI

## 1) Scoring prompt (BASE_PROMPT)
Use temperature 0.2 for deterministic output. Request ONLY JSON.

Example:
You are an expert insurance sales coach focused on Tier-2 and Tier-3 Indian markets. Given the lead details, return strictly valid JSON with the following keys: - lead_score: one of “High”, “Medium”, “Low” - recommended_product: short label (e.g., “Term”, “Child”, “ULIP”) - premium_sensitivity: one of “High”, “Medium”, “Low” - top_3_objections: array of up to 3 strings - short_rationale: 1-2 sentence explanation Return ONLY JSON — no additional commentary.
Lead: { lead JSON }

## 2) Script prompts
- English: use `SCRIPT_PROMPT_ENGLISH` (temperature 0.6)
- Hinglish: use `SCRIPT_PROMPT_HINGLISH` (temperature 0.7)

## Best practices
- Force JSON by: "Return ONLY valid JSON. If you cannot, return {\"error\":\"...\"}".
- Use low temperature for scoring, higher for scripts.
- If model returns text + JSON, parse the JSON substring using regex.