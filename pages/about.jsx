import { Container, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className='p-4'>
      <Card>
        <Card.Body>
          <Card.Text>
            CliqueSell is a selling and listing platform that is an invite only
            place to sell and buy from only verified members.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
