import styles from "./Prefix.module.css";
const Prefix = (props) => {
  return <span className={styles.prefix}>{props.children}</span>;
};

export default Prefix;
