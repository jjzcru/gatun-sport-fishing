import { useContext } from "react";
import { AppContext } from "../App.context";

import styles from "../page.module.css";

export default function AboutUs() {
  const { aboutUs } = useContext(AppContext);
  const { title, content, image, subtitle } = aboutUs;
  const style = {
    backgroundImage: `url("${image}")`
  };
  console.log(`BACKGROUND IMAGE:`, style)
  return (
    <section className={styles["about-us"]}>
      <div>
        <div className={styles["content"]}>
          <div>
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
            {content.map((c: string, i: number) => (
              <p key={`p-${i}`}>{c}</p>
            ))}
          </div>
        </div>
        <div className={styles["image"]}>
          <img style={style}/>
        </div>
      </div>
    </section>
  );
}
