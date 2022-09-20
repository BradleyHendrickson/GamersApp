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
  Alert,
} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { PictureCard } from "../components/PictureCard";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useEffect } from "react";

export function Store() {
  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + "...";
    } else {
      return string;
    }
  }

  const [posts, setPosts] = useState([]);

  function updatePosts() {
    fetch("/api/posts")
      .then((request) => request.json())
      .then((data) => {
        if (data) {
          setPosts(data);
        }
      });
  }

  useEffect(() => {
    updatePosts();
  }, []);

  return (
    <>
      <div style={{ height: "2rem" }}></div>
      <Row>
        <Col>
          <Container>
            <Row>
              {posts.map((l) => {
                return (
                  <Col key={l.id} md={"auto"} xs='12'>
                    <Card className='mb-2 mr-2'>
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
