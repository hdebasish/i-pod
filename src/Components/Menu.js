import { Component } from "react";
import styles from "../Styles/menu.module.css";
import HomeMenu from "./HomeMenu";
import MusicMenu from "./MusicMenu";

export default class Menu extends Component {
  render() {
    const handleActiveMenu = this.props.handleActiveMenu;
    const handleMenu = this.props.handleMenu;
    const isMusicMenu = this.props.isMusicMenu;

    let handleIsMusicMenu;

    if (isMusicMenu) {
      handleIsMusicMenu = this.props.handleIsMusicMenu;
    }

    return (
      <div className={styles.menu}>
        {isMusicMenu ? (
          <MusicMenu
            degree={this.props.degree}
            handleActiveMenu={handleActiveMenu}
            handleIsMusicMenu={handleIsMusicMenu}
          />
        ) : (
          <HomeMenu
            degree={this.props.degree}
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
          />
        )}
      </div>
    );
  }
}
