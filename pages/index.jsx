import Head from "next/head";
import Image from "next/image";
import { Card, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container className='p-4'>
      <Card>
        <Card.Header>Local Cartel</Card.Header>
        <Card.Body>Here is where the stuff would go</Card.Body>
      </Card>
    </Container>
  );
}
