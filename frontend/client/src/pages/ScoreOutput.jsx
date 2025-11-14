import React, {useState} from 'react'
import { scoreLead, generateScript } from '../api'

export default function ScoreOutput({lead, setScore, setScriptRes}){
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function runScore(){
    setLoading(true); setError(null)
    try{
      const res = await scoreLead(lead)
      setScore(res)
    }catch(err){ setError(err.message || 'Error') }
    setLoading(false)
  }

  async function makeScript(){
    setLoading(true); setError(null)
    try{
      const res = await generateScript(lead)
      setScriptRes(res)
    }catch(err){ setError(err.message || 'Error') }
    setLoading(false)
  }

  return (
    <div style={{border:'1px solid #eee', padding:12, borderRadius:8}}>
      <h4>Actions</h4>
      <button onClick={runScore} disabled={loading}>Run Lead Score</button>
      <button onClick={makeScript} disabled={loading} style={{marginLeft:8}}>Generate Script</button>
      {loading && <div>Working...</div>}
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  )
}
