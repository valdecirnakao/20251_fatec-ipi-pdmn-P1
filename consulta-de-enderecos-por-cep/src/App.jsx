import React from 'react'
import Busca from './components/Busca.jsx'

class App extends React.Component {


  onBuscaRealizada = (cep) => {
    console.log('Realizar a busca com o CEP ' + cep)
  }

  render() {
    return (
      <div className='grid justify-content-left' >
        <div className='col-4 m-6'>
          <Busca
            tip='Digite um CEP'
            onBuscaRealizada={this.onBuscaRealizada} />
        </div>
      </div>
    )
  }
}

export default App