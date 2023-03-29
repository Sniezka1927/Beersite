import styles from "./Content.module.css";

const Content = (props) => {
  return <span className={styles.content}>{props.children}</span>;
};

export default Content;
