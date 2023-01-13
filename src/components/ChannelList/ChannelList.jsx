import { Channel } from "../Channel";
import styles from "./styles/channels.module.css";

export function ChannelList({ channels }) {
  return (
    <main className={styles.channelsList}>
      {channels.map((channel, index) => (
        <Channel
          key={channel.id}
          index={index + 1}
          img={channel.image}
          name={channel.name_ru}
        />
      ))}
    </main>
  );
}
