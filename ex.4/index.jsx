import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro, { Segundo} from './component'

ReactDOM.render(
    <div> 
        <Primeiro value="Primeiro"/>
        <Segundo value="Segundo"/>
    </div>,
    document.getElementById('app'));


