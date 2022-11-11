// Cabecalho
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function header() {
  return (
    <div >
      <>

        <header style={{
          backgroundColor: 'black'
        }}>

          <Navbar >

            <div >
            <img src={require('../assets/logo/Logo_1-removebg-preview.png')} width="50px" alt="logo" />
            </div>
            <Navbar.Brand href="/" style={{ color: '#ef9539' }}>Academyfuturo</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: '#ef9539' }}>Pagina inicial</Nav.Link>
              <Nav.Link href="/Promocoes"style={{ color: '#ef9539' }}>Projetos</Nav.Link>
              <Nav.Link href="/add-contato/_add"style={{ color: '#ef9539' }}>História</Nav.Link>
              <Nav.Link href="/Faleconosco" style={{ color: '#ef9539' }}>Faleconosco</Nav.Link>
              <Nav.Link href="/Login"style={{ color: '#ef9539' }}>Cadastre-se</Nav.Link>
            </Nav>

          </Navbar>
        </header>

        <br />

      </>
      <br />






    </div>
  );
}

export default header;