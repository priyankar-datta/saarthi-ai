import axios from 'axios'
const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8000/api'


export async function scoreLead(payload){
const res = await axios.post(`${BASE}/score_lead`, payload)
return res.data
}


export async function generateScript(payload){
const res = await axios.post(`${BASE}/generate_script`, payload)
return res.data
}