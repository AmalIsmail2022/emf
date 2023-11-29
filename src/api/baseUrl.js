import axios from 'axios'
const baseUrl = axios.create({ baseURL: 'https://emb-alpha.vercel.app' })
export default baseUrl