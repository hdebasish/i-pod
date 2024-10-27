import { Component } from "react";
import styles from "../Styles/settings.module.css";
import setting from "../Images/settings.png";

export default class Settings extends Component {
  render() {
    return (
      <div className={styles.settings}>
        <img src={setting} alt="" />
        <h1>Settings</h1>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.handleMenu();
  }
}
