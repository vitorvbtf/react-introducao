import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './rodape'
import { Container } from 'react-bootstrap'

const Pagina = () => {
  return (
    <>
   

    <Cabecalho/>
    
    
    <div className='bg-secondary text-white py-3 text-center mb-4'>
      <h1>Página Inicial</h1>
    </div>
    <Rodape/>

    
    
    </>
  )
}

export default Pagina