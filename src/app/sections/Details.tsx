import { useContext } from "react";
import { AppContext, DetailSection } from "../App.context";

import styles from "../page.module.css";

export default function Details() {
    const { details } = useContext(AppContext);

    return (
        <section className={styles["details"]}>
            {details.map((d, i) => <Detail key={i} detail={d} index={i} />)}
        </section>
    );
}

function Detail(props: DetailProps) {
    const { detail, index } = props;
    const { title, content, image, background, color } = detail;
    const { label, src } = image;

    const style = {
        gridTemplateAreas: index % 2 === 0 ? `'image content'` : `'content image'`,
        background,
        color
    }

    return (
        <div style={style}>
            <div className={styles["content"]}>
                <div>
                    <h2 style={{color}}>{title}</h2>
                    <div className={styles['divider']} style={{background: color}}/>
                    {content.map((c) => (
                        <p key={c}>{c}</p>
                    ))}
                </div>
            </div>
            <div className={styles["image"]}>
                <img src={src} aria-label={label} alt={label} />
            </div>
        </div>
    );
}

interface DetailProps {
    detail: DetailSection;
    index: number;
}