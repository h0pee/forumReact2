//import { render } from '@testing-library/react'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
//import Primeiro from './Components/Primeiro'
//import Parametro from './Components/Parametro'
import Card from './Components/layout/Card'

ReactDOM.render(

    <div>
        <Card titulo = "Programando" sessao = "Selecione um:" footer = "&copy; Obrigado pela visita" primeiraOp = "Javascript" segundaOp = "C#">
            Conteúdo
        </Card>
    </div>,
    window.document.getElementById('root')
)