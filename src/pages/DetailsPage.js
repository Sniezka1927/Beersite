import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Header from "../components/Header/Header";
import Prefix from "../components/UI/Prefix";
import Content from "../components/UI/Content";

const DetailsPage = () => {
  const { beerId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [beer, setBeer] = useState({});
  useEffect(() => {
    console.log(beerId);
    (async function () {
      setIsLoading(true);
      const response = await fetch(
        `https://api.punkapi.com/v2/beers/${beerId}`
      );
      const data = await response.json();
      console.log(data);
      setBeer(data[0]);
      setIsLoading(false);
    })();
  }, [beerId]);

  console.log(beer);
  //   console.log(beer.method.mash_temp);
  return (
    <React.Fragment>
      <Header />
      <Container style={{ textAlign: "center" }}>
        {isLoading ? (
          <Row>
            <Col>
              <Spinner animation="border" variant="info" size="lg" />
            </Col>
          </Row>
        ) : (
          <React.Fragment>
            <Container style={{ textAlign: "left" }}>
              <Row>
                <Col xs={6}>
                  <Row>
                    <Col>
                      <Prefix>Name: </Prefix>
                      <Content>{beer.name}</Content>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Prefix>Tag Line: </Prefix>
                      <Content>{beer.tagline}</Content>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Prefix>First brewed: </Prefix>
                      <Content>{beer.first_brewed}</Content>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Prefix>Contributed by: </Prefix>
                      <Content>{beer.contributed_by}</Content>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Prefix>Description: </Prefix>
                      <br />
                      <Content>{beer.description}</Content>
                    </Col>
                  </Row>
                </Col>
                <Col
                  xs={6}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={beer.image_url}
                    alt={beer.name}
                    style={{ maxHeight: "35vh" }}
                  ></img>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Prefix>Food Pairing: </Prefix>
                  <br />
                  {beer.food_pairing.map((f) => {
                    return (
                      <Content>
                        {f} <br />
                      </Content>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Brewer Tips: </Prefix>
                  <br />
                  <Content>{beer.brewers_tips}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Volume: </Prefix>
                  <Content>
                    {beer.volume.value} {beer.volume.unit}
                  </Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Boil Volume: </Prefix>
                  <Content>
                    {beer.boil_volume.value} {beer.boil_volume.unit}
                  </Content>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Prefix>Ingredients: </Prefix>
                  <br />
                  <Prefix>Yeast: </Prefix>
                  <Content>{beer.ingredients.yeast}</Content>
                  <br />
                  {beer.ingredients.hops.map((ing) => {
                    return (
                      <React.Fragment>
                        <Content>
                          {ing.name} - {ing.amount.value}
                          {ing.amount.unit}, Attribute: {ing.attribute}, add on{" "}
                          {ing.add}
                        </Content>
                        <br />
                      </React.Fragment>
                    );
                  })}
                  <br />
                  <Prefix>Malt:</Prefix>
                  <br />
                  {beer.ingredients.malt.map((m) => {
                    return (
                      <React.Fragment>
                        <Content>
                          {m.name} - {m.amount.value}
                          {m.amount.unit}
                        </Content>
                        <br />
                      </React.Fragment>
                    );
                  })}
                  <br />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Fermentation: </Prefix>
                  <Content>
                    {beer.method.fermentation.temp.value}
                    {beer.method.fermentation.temp.unit}
                  </Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Mash Temp: </Prefix>
                  <Content>
                    {beer.method.mash_temp.map((m) => {
                      return (
                        <React.Fragment>
                          {m.temp.value}
                          {m.temp.unit}
                          {m.duration !== null
                            ? `, duration ${m.duration}`
                            : null}
                        </React.Fragment>
                      );
                    })}
                  </Content>
                </Col>
              </Row>
              {beer.method.twist !== null ? (
                <Row>
                  <Col>
                    <Prefix>Twist: </Prefix>
                    <Content>{beer.method.twist}</Content>
                  </Col>
                </Row>
              ) : null}

              <Row>
                <Col>
                  <Prefix>abv: </Prefix>
                  <Content>{beer.abv}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>ibu: </Prefix>
                  <Content>{beer.ibu}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>ebc: </Prefix>
                  <Content>{beer.ebc}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>ph: </Prefix>
                  <Content>{beer.ph}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>ebc: </Prefix>
                  <Content>{beer.ebc}</Content>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Prefix>Attenuation Level: </Prefix>
                  <Content>{beer.attenuation_level}</Content>
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </React.Fragment>
  );
};

export default DetailsPage;
