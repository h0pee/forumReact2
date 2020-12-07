import './Card.css'
import React from 'react'

export default props =>

    <div className="Card">
        <div className="header">
            <h1>{props.titulo}</h1>
        </div>

        <div className="section">
            <h2>{props.sessao}<br></br></h2>
            <div>
                <p>
                    <input type="radio" name="radLang" id="jscript"/>
                    <label for="jscript">{props.primeiraOp}</label><br/>
                    <input type="radio" name="radLang" id="c#"/>
                    <label for="c#">{props.segundaOp}</label>
                </p>
            </div>
            
        </div>

        <div className="footer">
            {props.footer}
        </div>
    </div>