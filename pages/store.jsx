import Head from "next/head";
import Image from "next/image";
import { Card, Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { PictureCard } from "../components/PictureCard";

export default function Store() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>Local Cartel</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='#forsale'>For Sale</Nav.Link>
          <Nav.Link href='#profile'>My Profile</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
