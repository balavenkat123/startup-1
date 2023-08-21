import React from 'react';
import { Navbar,Nav,Container,Jumbotron,Button} from "react-bootstrap";
import "./App.css"



function Hero() {
  return (
    <div className='mean-fruit-gradient vh-100'>
    <Container  >
    <Navbar >
      <Container >
        <Navbar.Brand >Logo </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Jumbotron>
      <h1>Welcome to Your Advertisements</h1>
      <p>Your one-stop solution for advertising needs.</p>
      <Button variant="primary">view the total page</Button>
    </Jumbotron>
    <Container>
    
    </Container>
    <footer className="mt-5">
      <Container>
        <p>{new Date().toLocaleTimeString()}</p>
        <p>&copy;{new Date().getFullYear()} Your Company</p>
      </Container>
    </footer>
    </Container>
    </div>
  );
}

export default Hero;
