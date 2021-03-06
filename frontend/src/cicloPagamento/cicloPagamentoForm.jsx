import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { reduxForm, Field} from 'redux-form'

import {init} from './cicloPagamentoActions'
import labelAndInput from '../common/form/labelAndInput'
import listaCreditos from './listaCreditos'

class CicloPagamentoForm extends Component{

    render(){
        const {handleSubmit, readOnly} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly} label="Nome" cols="12 4" placeholder="Informe o nome"/>
                    <Field name="mes" component={labelAndInput} readOnly={readOnly} label="Mês" cols="12 4" placeholder="Informe o mês" type="number"/>
                    <Field name="ano" component={labelAndInput} readOnly={readOnly} label="Ano" cols="12 4" placeholder="Informe o ano" type="number"/>
                    <listaCreditos cols="12 6" readOnly={readOnly}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.label}</button>
                    <button type='button' className={`btn btn-${this.props.submitClass}`} onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


CicloPagamentoForm = reduxForm({form: 'cicloPagamentoForm', destroyOnUnmount: false})(CicloPagamentoForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(CicloPagamentoForm)