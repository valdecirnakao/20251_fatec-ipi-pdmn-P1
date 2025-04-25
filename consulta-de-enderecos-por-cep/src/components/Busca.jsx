import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'

export default class Busca extends Component {
    state = {
        cepDeBusca: ''
    }
    
    onCEPAlterado = (evento) => {
        this.setState({ cepDeBusca: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.state.cepDeBusca.length != 8 ? 
            alert('A quantidade de algarismos inseridos é diferente do padrão para CEP!') 
            : 
            this.props.onBuscaRealizada(this.state.cepDeBusca)}
    

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div
                    className='flex flex-column'>                       
                    <InputText
                        onChange={this.onCEPAlterado}
                        className='w-full'
                        keyfilter='pint'
                        placeholder={this.props.tip}
                        value={this.state.cepDeBusca} />
                    <Button
                        className='mt-2 w-full'
                        label='OK'
                         />                        
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    tip: 'Insira o CEP a ser pesquisado'
}