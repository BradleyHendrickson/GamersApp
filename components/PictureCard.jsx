import { Card, Container, Row, Col } from "react-bootstrap";

export function PictureCard(props) {
  return (
    <Card>
      <img src={props?.cardImage}></img>
    </Card>
  );
}
