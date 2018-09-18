import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary(){
    const request = axios.get(`${BASE_URL}/cicloPagamentos/summary`)
    return {
        type: 'PAGAMENTO_SUMMARY_FETCHED',
        payload: request
    }
}