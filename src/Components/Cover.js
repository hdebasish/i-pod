import { Component } from "react";
import styles from "../Styles/cover.module.css";

export default class CoverFlow extends Component {
  render() {
    return (
      <div className={styles.cover}>
        <h1>CoverFlow</h1>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleMenu();
  }
}
