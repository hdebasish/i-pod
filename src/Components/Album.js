import { Component } from "react";
import styles from "../Styles/cover.module.css";

export default class Album extends Component {
  render() {
    return (
      <div className={styles.cover}>
        <h1>Album</h1>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleIsMusicMenu();
  }
}
