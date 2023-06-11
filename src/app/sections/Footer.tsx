import { useContext } from "react";
import { AppContext } from "../App.context";
import styles from "../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <ContactUs />
        <Address />
      </div>
    </footer>
  );
}

function ContactUs() {
  const { footer } = useContext(AppContext);
  const { contactUs } = footer;
  const { title, description, email, copyright, privacy } = contactUs;
  return (
    <div>
      <h4>{title}</h4>

      <p>{description}</p>

      <p>
        <a href={`mailto:${email.address}?subject=${email.subject}`}>
          {email.text}
        </a>
      </p>

      <p>{copyright}</p>

      <p>
        {" "}
        <a href={privacy.url} target={"blank"} rel="noopener">
          {privacy.text}
        </a>
      </p>
    </div>
  );
}

function Address() {
  const { footer } = useContext(AppContext);
  const { address } = footer;
  const { title, mapUrl, address1, address2, phone } = address;
  return (
    <div>
      <h4>{title}</h4>
      <p>
        <a href={mapUrl} target={"blank"} rel="noopener">
          {address1}
        </a>
        <br />
        {address2}
        <br />
        <a href={`tel:${phone.number}`}>{phone.text}</a>
        <br />
      </p>
      <Social />
    </div>
  );
}

function Social() {
  const { footer } = useContext(AppContext);
  const { social } = footer;
  const { instagram, wa, tiktok } = social;
  return (
    <span className={styles["social"]}>
      <a href={instagram} target={"_blank"}>
        <img src={`/icons/instagram.svg`} />
      </a>
      <a href={wa} target={"_blank"}>
        <img src={`/icons/whatsapp.svg`} />
      </a>
      <a href={tiktok} target={"_blank"}>
        <img src={`/icons/tiktok.svg`} />
      </a>
    </span>
  );
}
