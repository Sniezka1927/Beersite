import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "../components/Pagination/Pagination";
import Beer from "../components/Beer/Beer";
import Header from "../components/Header/Header";
import Spinner from "react-bootstrap/Spinner";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dispalyedBeers, setDisplayedBeers] = useState([]);
  const beersPerPage = 12;
  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=${beersPerPage}`
      );
      const data = await response.json();
      setIsLoading(false);
      setDisplayedBeers(data.slice(0, 12));
    })();
  }, [currentPage]);

  const onArrowClick = (type) => {
    if (type === "right") {
      console.log("right");
      setCurrentPage((previousState) => (previousState += 1));
    } else if (type === "left" && currentPage > 1) {
      setCurrentPage((previousState) => (previousState -= 1));
    }
  };
  return (
    <React.Fragment>
      <Header />
      <Container style={{ textAlign: "center" }}>
        <Row></Row>
        {isLoading ? (
          <Row>
            <Col>
              <Spinner animation="border" variant="info" size="lg" />
            </Col>
          </Row>
        ) : (
          <React.Fragment>
            <Row>
              {dispalyedBeers.map((beer) => {
                return (
                  <Col key={beer.id} md={4}>
                    <Beer beer={beer} />
                  </Col>
                );
              })}
            </Row>
            <Row>
              <Col>
                <Pagination curPage={currentPage} onArrowClick={onArrowClick} />
              </Col>
            </Row>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
