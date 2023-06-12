"use client";
import { useMemo, useState, useRef, useContext } from "react";
import { AppContext } from "../../App.context";
import styles from "../faq.module.css";

export default function Faq() {
  const { faq } = useContext(AppContext);
  const { questions } = faq;
  return (
    <section className={styles.faq}>
      {questions.map((q) => (
        <Accordion {...q} />
      ))}
    </section>
  );
}

function Accordion(props: AccordionProps) {
  const { question, answer } = props;
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const style: any = useMemo(() => {
    if (!panelRef?.current) {
      return {};
    }
    const { current } = panelRef;

    if (current.style.maxHeight) {
      return { maxHeight: null };
    }
    return { maxHeight: current.scrollHeight * 2 + "px" };
  }, [active, panelRef]);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className={styles.accordion}>
      <div onClick={onClick}>
        <h4>{question} </h4>
        <button onClick={onClick}>View More</button>
      </div>

      <div className={styles.panel} ref={panelRef} style={style}>
        {answer.map((a, i) => (
          <p key={i}>{a}</p>
        ))}
      </div>
    </div>
  );
}

interface AccordionProps {
  question: string;
  answer: Array<string>;
}
