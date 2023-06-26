import { useContext } from "react";
import { AppContext } from "../App.context";
import styles from "../page.module.css";

export default function Header() {
  const { header } = useContext(AppContext);
  const { title, content, videoSrc } = header;
  return (
    <header id={"header"} className={styles.header}>
      <video autoPlay loop playsInline muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>{title}</h1>
        {content.map((c) => (
          <p key={c}>{c}</p>
        ))}
      </div>
    </header>
  );
}
