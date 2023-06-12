import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "../App.context";
import styles from "../page.module.css";

export default function Navbar() {
  const { navbar } = useContext(AppContext);
  return (
    <nav id={"navbar"} className={styles.navbar}>
      <div>
        <Link href="/">{navbar.title}</Link>
      </div>
      <button>{navbar.bookNowBtn}</button>
    </nav>
  );
}
