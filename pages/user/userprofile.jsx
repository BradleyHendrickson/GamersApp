import Head from "next/head";
import Image from "next/image";
import { Card, Container } from "react-bootstrap";

export default function UserProfile() {
  return (
    <Container className='p-4'>
      <Card>
        <Card.Header>User Profile</Card.Header>
        <Card.Body>Brad - black man</Card.Body>
      </Card>
    </Container>
  );
}
