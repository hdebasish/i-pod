import styles from "../Styles/display.module.css";
import Menu from "./Menu";
import Games from "./Games";
import Settings from "./Settings";
import CoverFlow from "./Cover";
import { Component } from "react";
import Album from "./Album";
import Artist from "./Artist";
import MusicPlayer from "./MusicPlayer";

export default class Display extends Component {
  render() {
    const isMenuOpen = this.props.isMenuOpen;
    const handleActiveMenu = this.props.handleActiveMenu;
    const activeMenu = this.props.activeMenu;
    const handleMenu = this.props.handleMenu;
    const handleIsMusicMenu = this.props.handleIsMusicMenu;
    const isMusicMenu = this.props.isMusicMenu;
    const activeMusicMenu = this.props.activeMusicMenu;
    const isPlaying = this.props.isPlaying;
    const currentSongInfo = this.props.currentSongInfo;
    const currentSongDuration = this.props.currentSongDuration;
    const timeElapsed = this.props.timeElapsed;

    if (
      isMenuOpen &&
      !isMusicMenu &&
      activeMenu === -1 &&
      activeMusicMenu !== -1
    ) {
      return (
        <div className={styles.display}>
          {isMenuOpen && (
            <Menu
              degree={this.props.degree}
              handleActiveMenu={handleActiveMenu}
              handleMenu={handleMenu}
              handleIsMusicMenu={handleIsMusicMenu}
              isMusicMenu={true}
              activeMenu={activeMenu}
            />
          )}
        </div>
      );
    }

    if (activeMusicMenu === 0) {
      return (
        <div className={styles.display}>
          <MusicPlayer
            isPlaying={isPlaying}
            handleMenu={handleMenu}
            handleIsMusicMenu={handleIsMusicMenu}
            currentSongInfo={currentSongInfo}
            currentSongDuration={currentSongDuration}
            timeElapsed={timeElapsed}
          />
        </div>
      );
    }

    if (activeMusicMenu === 1) {
      return (
        <div className={styles.display}>
          <Artist
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
            handleIsMusicMenu={handleIsMusicMenu}
          />
        </div>
      );
    }

    if (activeMusicMenu === 2) {
      return (
        <div className={styles.display}>
          <Album
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
            handleIsMusicMenu={handleIsMusicMenu}
          />
        </div>
      );
    }

    if (activeMenu === 0) {
      return (
        <div className={styles.display}>
          <CoverFlow
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
          />
        </div>
      );
    }

    if (activeMenu === 1) {
      return (
        <div className={styles.display}>
          {isMenuOpen && (
            <Menu
              degree={this.props.degree}
              handleActiveMenu={handleActiveMenu}
              handleMenu={handleMenu}
              handleIsMusicMenu={handleIsMusicMenu}
              isMusicMenu={true}
              activeMenu={activeMenu}
            />
          )}
        </div>
      );
    }

    if (activeMenu === 2) {
      return (
        <div className={styles.display}>
          <Games handleActiveMenu={handleActiveMenu} handleMenu={handleMenu} />
        </div>
      );
    }

    if (activeMenu === 3) {
      return (
        <div className={styles.display}>
          <Settings
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
          />
        </div>
      );
    }

    if (isMusicMenu) {
      return (
        <div className={styles.display}>
          {isMenuOpen && (
            <Menu
              degree={this.props.degree}
              handleActiveMenu={handleActiveMenu}
              handleMenu={handleMenu}
              handleIsMusicMenu={handleIsMusicMenu}
              isMusicMenu={true}
              activeMenu={activeMenu}
            />
          )}
        </div>
      );
    }

    return (
      <div className={styles.display}>
        {isMenuOpen && (
          <Menu
            degree={this.props.degree}
            handleActiveMenu={handleActiveMenu}
            handleMenu={handleMenu}
            isMusicMenu={false}
          />
        )}
      </div>
    );
  }
}
