import logo from "../../assets/logo/Logo.png";
import { Search } from "../Search";
import styles from "./styles/header.module.css";

export function Header({ updateChannels }) {
  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={logo} alt="logo" />
      <Search updateChannels={updateChannels} />
    </header>
  );
}
