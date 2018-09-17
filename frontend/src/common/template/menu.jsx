import React from 'react'

import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' icon='dashboard' label='Dashboard'/>
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#cicloPagamentos' label='Ciclo de Pagamento' icon='usd' />
        </MenuTree>
    </ul>
)