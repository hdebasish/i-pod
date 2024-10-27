import { Component } from "react";
import styles from "../Styles/musicplayer.module.css";
import img from "../Images/Anuv Jain - GUL (Studio).jpg";

export default class MusicPlayer extends Component {
  constructor() {
    super();
  }

  formatSeconds = s => new Date(s * 1000).toISOString().substring(14, 19);



  percentage = (current, total) => {
    return (current/total)*100;
  }

  render() {
    const { id, title, artist, image, audio } = this.props.currentSongInfo;

    const duration = this.props.currentSongDuration;

    const elapsed = this.props.timeElapsed ;

    const currentSongDuration = this.formatSeconds(duration);

    const timeElapsed = this.formatSeconds(elapsed);

    const progress = this.percentage(elapsed+1, duration);

    // console.log(progress);

    return (
      <div className={styles.player}>
        <div className={styles.info}>
          <img src={image} alt="No Image" className={styles.icon} />{" "}
          <div className={styles.marquee}>
            <h3>{title}</h3> <p>{artist}</p>
          </div>{" "}
        </div>
        <div className={styles.progressBar}>
          <div className={styles.time}>
            <div>{timeElapsed}</div>
            <div className={styles.progress}>
              <div className={styles.status} style={{ width: `${progress}%` }}></div>
            </div>
            <div>{currentSongDuration}</div>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleIsMusicMenu();
  }
}
