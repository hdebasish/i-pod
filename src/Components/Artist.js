import { Component } from "react";
import styles from "../Styles/cover.module.css";

export default class Artist extends Component {
  render() {
    return (
      <div className={styles.cover}>
        <h1>Artist</h1>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleIsMusicMenu();
  }
}
