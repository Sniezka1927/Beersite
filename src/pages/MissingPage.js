import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header/Header";

const MissingPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Container
        style={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "200%", padding: "3em", margin: "3em" }}>
          Error! The page you are trying to access does not exist.
        </span>
      </Container>
    </React.Fragment>
  );
};

export default MissingPage;
