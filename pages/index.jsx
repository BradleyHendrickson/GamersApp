import Head from "next/head";
import Image from "next/image";
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
import { PictureCard } from "../components/PictureCard";
import { Store } from "../components/Store";

export default function Home() {
  return <Store />;
}
