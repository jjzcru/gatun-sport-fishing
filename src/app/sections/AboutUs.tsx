import { useContext } from "react";
import { AppContext } from "../App.context";

import styles from "../page.module.css";

export default function AboutUs() {
  const { aboutUs } = useContext(AppContext);
  const { title, content, image } = aboutUs;
  return (
    <section className={styles["about-us"]}>
      <div>
        <div className={styles["content"]}>
          <div>
            <h2>{title}</h2>
            <hr />
            {content.map((c: string, i: number) => <p key={`p-${i}`}>{c}</p>)}
          </div>
        </div>
        <div className={styles["image"]}>
          <img src={image} />
        </div>
      </div>
    </section>
  );
}
