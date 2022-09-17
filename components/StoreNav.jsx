import { Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export function StoreNav(props) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>CliqueSell</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>For Sale</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
