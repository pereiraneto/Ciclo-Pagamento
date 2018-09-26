import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as ResetForm, initialize} from 'redux-form'   
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList(){
    const request = axios.get(`${BASE_URL}/cicloPagamentos`)
    return {
        type: 'CICLO_PAGAMENTO_FETCHED',
        payload: request
    }
}

export function create(values){
    return submit(values, 'post')
}

export function update(values){
    return submit(values, 'put')
}

export function remove(values){
    return submit(values, 'delete')
}

function submit(values, method){
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/cicloPagamentos/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso !')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error));
            })
    }
}

export function showUpdate(cicloPagamento){
    return[
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('cicloPagamentoForm', cicloPagamento)
    ]
}

export function showDelete(cicloPagamento){
    return[
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('cicloPagamentoForm', cicloPagamento)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('cicloPagamentoForm', INITIAL_VALUES)
    ]
}