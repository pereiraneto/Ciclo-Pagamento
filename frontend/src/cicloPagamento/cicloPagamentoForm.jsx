import React, {Component} from 'react'
import { reduxForm, Field} from 'redux-form'

class CicloPagamentoForm extends Component{

    render(){
        const {handleSubmit} = this.props
        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component="input"/>
                    <Field name="mes" component="input"/>
                    <Field name="ano" component="input"/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'cicloPagamentoForm'})(CicloPagamentoForm)