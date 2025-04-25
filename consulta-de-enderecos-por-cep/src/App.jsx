import React from 'react'
import Busca from './components/Busca.jsx'
import LocalidadeLista from './components/LocalidadeLista.jsx'
import viacepClient from './utils/viacepClient.js'

class App extends React.Component {

  viacepClient = null

  state = {
    ceps:
      [
        {
          cep: '04094-050',
          logradouro: 'Avenida Pedro Álvares Cabral',
          bairro: 'Parque Ibirapuera',
          localidade: 'São Paulo',
          uf: 'SP'
        },
        {
          cep: '55592-970',
          logradouro: 'Rua dos Navegantes',
          bairro: 'Vila de Porto de Galinhas',
          localidade: 'Ipojuca',
          uf: 'PE'
        }
      ]
  }


  onBuscaRealizada = (cep) => {
    viacepClient.get('/' + cep + '/json/').then(
      (results) => results.data.erro ?
        alert('O CEP inserido não foi encontrado!')
        :
        console.log(results))
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