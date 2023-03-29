import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import styles from "./Pagination.module.css";
const Pagination = (props) => {
  return (
    <Row style={{ margin: "1em" }}>
      <Col>
        <BiLeftArrow
          onClick={() => {
            props.onArrowClick("left");
          }}
          size={"1.5em"}
          className={styles.arrow}
        />
        <span className={styles.currentPage}>{props.curPage}</span>
        <BiRightArrow
          onClick={() => {
            props.onArrowClick("right");
          }}
          size={"1.5em"}
          className={styles.arrow}
        />
      </Col>
    </Row>
  );
};

export default Pagination;
