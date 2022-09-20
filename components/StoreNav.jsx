import {
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";

import { signIn } from "next-auth/react";

export function StoreNav(props) {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>CliqueSell</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>For Sale</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Button
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
          >
            Sign In With Google
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
