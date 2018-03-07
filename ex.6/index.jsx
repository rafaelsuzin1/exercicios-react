import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './member'

ReactDOM.render(
    <Family lastname='Suzin'>
        <Member name='Rafael'/>
        <Member name='Maína'/>
    </Family>,
    document.getElementById('app'));


