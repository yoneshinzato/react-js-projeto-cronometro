import React, {Component} from 'react'

import './style.css'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: 0,
            vai: "VAI!"
        }

        this.timer = null //o que vai começar a contar o cronometro
    }

    

    go = ()=> {
        if(this.timer !== null){
            clearInterval(this.timer) //pausa o timer
            this.timer = null //para de contar depois que pausa

            let state = this.state
            state.vai = "VAI!"
            this.setState(state)

        } else {
            this.timer = setInterval(()=>{
                let state = this.state
                state.time += 0.1
                this.setState(state)
            }, 100)
            
            let estado = this.state
            estado.vai = "PAUSE!"
            this.setState(estado)
        }

        
    }

    clean = () => {
        if(this.timer !== null){
            clearInterval(this.timer) //pausa o timer
            this.timer = null // para de contar após pausa
        }

        let state = this.state
        state.time = 0
        state.vai = "VAI!"
        this.setState(state)
        
    }

    render(){
        return(
            <div className="container">
                <img src={require('./assets/cronometro.png')} className="img" alt="timer" />
                <a className="timer">{this.state.time.toFixed(2)}</a>
                <div className="area-btn">
                    <a className="botao" onClick={this.go}>{this.state.vai}</a>
                    <a className="botao" onClick={this.clean}>LIMPAR</a>
                </div>
            </div>
        )
    }
}

export default App