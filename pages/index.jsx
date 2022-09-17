import Head from "next/head";
import Image from "next/image";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { PictureCard } from "../components/PictureCard";

export default function Home() {
  const pics = ["bussin.png", "waffle.png"];

  var banned = false;

  return (
    <Container className='p-4'>
      <Card>
        <Card.Header>Local Cartel</Card.Header>
        <Card.Body>
          Here is where the stuff would go
          {pics.map((pic) => {
            return <PictureCard cardImage={pic}></PictureCard>;
          })}
        </Card.Body>
      </Card>
    </Container>
  );
}
