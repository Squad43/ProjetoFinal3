
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar} from 'react-bootstrap'


function App() {
  return (        
    <div className="App">
      <Navbar bg="black" variant='dark'
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        <img src={require('../assets/logo/Logo_1-removebg-preview.png')} width="100px" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle className='coloring' />
        <Navbar.Collapse>
          <Nav >
            
            <Nav.Link href="/" style={{color: "#ef9539"}} >Página inicial</Nav.Link>
            <Nav.Link href="Projetos" style={{color: "#ef9539"}} >Projetos</Nav.Link>
            <Nav.Link href="Historia" style={{color: "#ef9539"}} >História</Nav.Link>
            <Nav.Link href="add-cadastro/_add" style={{color: "#ef9539"}} >Cadastre-se</Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
     
    </div>
  );
}

export default App;