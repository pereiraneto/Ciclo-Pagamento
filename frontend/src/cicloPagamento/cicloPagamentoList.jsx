import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {getList} from './cicloPagamentoActions'

class CicloPagamentoList extends Component{

    componentWillMount(){
        this.props.getList()
    }

    renderRows(){        
        const list = this.props.list || []        
        return list.map(cp => (
            <tr key={cp._id}>
                <td>{cp.name}</td>
                <td>{cp.mes}</td>
                <td>{cp.ano}</td>
            </tr>
        ))
    }

    render(){
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({list: state.cicloPagamento.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamentoList)