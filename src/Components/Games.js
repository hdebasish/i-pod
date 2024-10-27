import { Component } from "react";
import styles from "../Styles/games.module.css";
import game from "../Images/games.png";

export default class Games extends Component {
  render() {
    return (
      <div className={styles.games}>
        <img src={game} alt="" />
        <h1>Games</h1>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleMenu();
  }
}
