import { useContext } from "react";
import { AppContext } from "../../App.context";
import styles from "../faq.module.css";

export default function Header() {
  const { faq } = useContext(AppContext);
  const { title, description, image } = faq;
  return (
    <header id={"header"} className={styles.header}>
      <img src={image} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
