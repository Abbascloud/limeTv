import searchIcon from "../../assets/icons/search.png";
import { DebounceInput } from "react-debounce-input";
import styles from "./styles/search.module.css";

export function Search({ updateChannels }) {
  function handleChange(e) {
    updateChannels(e.target.value);
  }
  return (
    <nav className={styles.search}>
      <img src={searchIcon} alt="search icon" />
      <DebounceInput
        onChange={handleChange}
        minLength={2}
        debounceTimeout={200}
        placeholder="Панель поиска"
      />
    </nav>
  );
}
