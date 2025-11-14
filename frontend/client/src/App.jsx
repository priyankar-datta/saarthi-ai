import React, {useState} from 'react'
import LeadForm from './pages/LeadForm'
import ScoreOutput from './pages/ScoreOutput'
import ScriptOutput from './pages/ScriptOutput'


export default function App(){
const [lead, setLead] = useState(null)
const [score, setScore] = useState(null)
const [scriptRes, setScriptRes] = useState(null)


return (
<div style={{padding:20, fontFamily:'Arial, sans-serif'}}>
<h1>Saarthi AI — Lead Qualifier & Script Generator</h1>
<LeadForm onSubmit={(l)=>{ setLead(l); setScore(null); setScriptRes(null); }} />
{lead && <ScoreOutput lead={lead} setScore={setScore} setScriptRes={setScriptRes} />}
{scriptRes && <ScriptOutput scriptRes={scriptRes} />}
</div>
)
}