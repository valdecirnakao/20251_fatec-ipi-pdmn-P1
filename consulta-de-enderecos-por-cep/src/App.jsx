import React from 'react'
import Busca from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista.jsx'
import viacepClient from './utils/viacepClient.js'
import Dashboard from './components/Dashboard.jsx'

class App extends React.Component {
  contador = 0
  state = {
    ceps: []
  }

  buscarCep = (cep) => {
    viacepClient.get(cep + '/json/').then(
      (results) => {
        if (results.data.erro) {
          alert('O CEP inserido não foi encontrado!')
        } else {
          this.setState({ ceps: [results.data, ...this.state.ceps] })
          this.contador++
        }
      })
  }

  render() {
    return (
      <div className='grid'>
        <div className='col-6 justify-content-center flex-column'>
          <div className='p-5'>
            <Busca
              tip='Digite um CEP'
              onBuscaRealizada={this.buscarCep} />
          </div>
          <div className='pl-5 pr-5'>
            <LocalidadeLista
              ceps={this.state.ceps} />
          </div>
        </div>
        <div className='col-6 p-5 grid justify-content-center'>
          <Dashboard
            ceps={this.state.ceps}
            contador={this.contador} />
        </div>
      </div>
    )
  }
}

export default App