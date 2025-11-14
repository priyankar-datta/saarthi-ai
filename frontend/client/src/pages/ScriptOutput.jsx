import React from 'react'

export default function ScriptOutput({scriptRes}){
  if(!scriptRes) return null
  return (
    <div style={{marginTop:12, border:'1px solid #eee', padding:12, borderRadius:8}}>
      <h4>Lead Recommendation</h4>
      <pre style={{whiteSpace:'pre-wrap'}}>{JSON.stringify(scriptRes.rec, null, 2)}</pre>
      <h4>Generated Script</h4>
      <div style={{background:'#fafafa', padding:10, borderRadius:6}}>
        <pre style={{whiteSpace:'pre-wrap'}}>{scriptRes.script}</pre>
      </div>
    </div>
  )
}
