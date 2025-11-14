import React, {useState} from 'react'

export default function LeadForm({onSubmit}){
  const [form, setForm] = useState({name:'', age:30, occupation:'shopkeeper', monthly_income:30000, dependents:1, goal:'family protection', notes:'', language:'hi'})

  function update(k,v){ setForm(prev=>({...prev, [k]: v})) }

  return (
    <div style={{border:'1px solid #ddd', padding:12, borderRadius:8, marginBottom:12}}>
      <h3>Enter lead details</h3>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
        <input placeholder='Name' value={form.name} onChange={e=>update('name',e.target.value)} />
        <input type='number' value={form.age} onChange={e=>update('age',parseInt(e.target.value||0))} />
        <input placeholder='Occupation' value={form.occupation} onChange={e=>update('occupation',e.target.value)} />
        <input placeholder='Monthly income' type='number' value={form.monthly_income} onChange={e=>update('monthly_income',parseInt(e.target.value||0))} />
        <input placeholder='Dependents' type='number' value={form.dependents} onChange={e=>update('dependents',parseInt(e.target.value||0))} />
        <input placeholder='Goal' value={form.goal} onChange={e=>update('goal',e.target.value)} />
      </div>
      <div style={{marginTop:8}}>
        <textarea placeholder='Notes' rows={2} value={form.notes} onChange={e=>update('notes',e.target.value)} />
      </div>
      <div style={{marginTop:8}}>
        <label>
          Language:
          <select value={form.language} onChange={e=>update('language', e.target.value)}>
            <option value='hi'>Hinglish/Hindi</option>
            <option value='en'>English</option>
          </select>
        </label>
      </div>
      <div style={{marginTop:8}}>
        <button onClick={()=>onSubmit(form)}>Submit Lead</button>
      </div>
    </div>
  )
}
