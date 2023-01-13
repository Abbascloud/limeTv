import styles from "./styles/channel.module.css";
export function Channel({ img, index, name }) {
  return (
    <div className={styles.channel}>
      <img src={img} alt="channel logo" />
      <p>
        {index}. {name}
      </p>
    </div>
  );
}
