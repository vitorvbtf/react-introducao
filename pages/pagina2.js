import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/rodape'
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

const pagina2 = () => {
  return (
    <>
    <Pagina/>

    <Container>
      <h1>Página 2</h1>
    </Container>


    </>
  )
}

export default pagina2