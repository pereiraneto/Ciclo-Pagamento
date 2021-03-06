import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {selectTab, showTabs} from '../common/tab/tabActions'
import {create, update, remove} from './cicloPagamentoActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import CicloPagamentoList from './cicloPagamentoList'
import CicloPagamentoForm from './cicloPagamentoForm'

class CicloPagamento extends Component{
    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render(){
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon='bars' target='tabList' />
                            <TabHeader label="Incluir" icon='plus' target='tabCreate' />
                            <TabHeader label="Alterar" icon='pencil' target='tabUpdate' />
                            <TabHeader label="Excluir" icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'> 
                                <CicloPagamentoList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <CicloPagamentoForm submitClass="primary" label="Incluir" onSubmit={this.props.create} />  
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <CicloPagamentoForm submitClass="info" label="Alterar" onSubmit={this.props.update} />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <CicloPagamentoForm submitClass="danger" label="Excluir" onSubmit={this.props.remove} readOnly={true} />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({tab: state.tab})
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs, create, update, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(CicloPagamento)