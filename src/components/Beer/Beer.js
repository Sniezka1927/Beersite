import React from "react";
import styles from "./Beer.module.css";
import { BsFillDiamondFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Beer = (props) => {
  const beer = props.beer;
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/details/${beer.id}`);
  };
  return (
    <div className={styles.beerContainer} onClick={onClickHandler}>
      <div className={styles.imageContainer}>
        <img
          src={beer.image_url}
          alt={beer.name}
          className={styles.image}
        ></img>
      </div>
      <br />
      <>{beer.name}</>
      <br />
      <span className={styles.separator}>
        <BsFillDiamondFill />
      </span>
      <br />
      <>{beer.tagline}</>
    </div>
  );
};

export default Beer;
