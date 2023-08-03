"use client";
import { useMemo, useState, useRef, useContext } from "react";
import { AppContext } from "../../App.context";
import styles from "../faq.module.css";

export default function Faq() {
  const { faq } = useContext(AppContext);
  const { questions, viewMoreBtn } = faq;
  return (
    <section className={styles.faq}>
      {questions.map((q, i) => (
        <Accordion key={i} viewMoreBtn={viewMoreBtn} {...q} />
      ))}
    </section>
  );
}

function Accordion(props: AccordionProps) {
  const { question, answer, viewMoreBtn } = props;
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<boolean>(false);
  const style: any = useMemo(() => {
    if (!panelRef?.current) {
      return {};
    }
    const { current } = panelRef;

    if (!active) {
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
        <button onClick={onClick}>{viewMoreBtn}</button>
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
  viewMoreBtn: string;
}
