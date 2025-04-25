import React from 'react'
import Busca from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista.jsx'
import viacepClient from './utils/viacepClient.js'

class App extends React.Component {

  viacepClient = null

  state = {
    ceps:
      []
  }

  onBuscaRealizada = (cep) => {
    viacepClient.get('/' + cep + '/json/').then(
      (results) => results.data.erro ?
        alert('O CEP inserido não foi encontrado!')
        :
        this.setState({ ceps: [results.data, ...this.state.ceps] }
        ))
  }

  render() {
    return (
      <div className='grid justify-content-left flex-column'>
        <div className='col-6 m-2'>
          <Busca
            tip='Digite um CEP'
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
        <div className='col-6 m-2'>
          <LocalidadeLista
            ceps={this.state.ceps} />
        </div>
      </div>
    )
  }
}

export default App