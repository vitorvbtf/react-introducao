import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/rodape";
import { Container } from 'react-bootstrap';
import Pagina from '../components/Pagina';

export default function Home() {
  return (
    <>
    <Pagina/>

    <Container>
    
    <h1 >Hello World!</h1>
    <p>Qualquer Texto</p>
    <p>Qualquer Texto</p>
    <p>Qualquer Texto</p>
    <p>Qualquer Texto</p>

    <input class="btn btn-success"value="enviar"></input>
    
    </Container>

    
    </>
  )
}
