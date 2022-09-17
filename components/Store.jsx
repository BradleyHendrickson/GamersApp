import Head from "next/head";
import Image from "next/image";
import {
  Card,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { PictureCard } from "../components/PictureCard";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function truncateString(string, limit) {
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  } else {
    return string;
  }
}

const listings = [
  {
    title: "Some Delicious Ramen",
    picture: "bussin.png",
    description:
      "This ramen was made from the finest materials, sourced from the Maruchan Merchants in the misty mountains",
    price: 69.99,
  },
  {
    title: "Fresh Hot Waffle",
    picture: "waffle.png",
    description: "A crispy waffle, with fresh butter and syrup",
    price: 100,
  },
  {
    title: "Kids Bike",
    picture: "bike.webp",
    description:
      "I bought this bike for my kid but he outgrew it. Time to pass it on!",
    price: 25,
  },
];

export function Store() {
  return (
    <>
      <div style={{ height: "2rem" }}></div>
      <Row>
        <Col>
          <Container>
            <Row>
              {listings.map((l) => {
                return (
                  <Col className='col-auto'>
                    <Card style={{ width: "18rem" }} className='mb-2 mr-2'>
                      <Card.Img
                        variant='top'
                        style={{ height: "18rem" }}
                        src={l.picture}
                      />
                      <Card.Body style={{ minHeight: "12rem" }}>
                        <Card.Title>{l.title}</Card.Title>
                        <Card.Subtitle>
                          <Row>
                            <Col>
                              {l.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <p>
                                <FontAwesomeIcon
                                  icon={faUser}
                                  className='mr-2 mt-2'
                                />{" "}
                                <a>John Doe</a>
                              </p>
                            </Col>
                          </Row>
                        </Card.Subtitle>
                        <Card.Text>
                          {truncateString(l.description, 90)}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
}
