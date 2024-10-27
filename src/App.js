import { Component } from "react";
import React from "react";
import Controller from "./Components/Controller";
import Display from "./Components/Display";
import styles from "./Styles/container.module.css";
import songs from "./Components/Songs";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      degree: 0.0,
      isSelected: false,
      activeMenu: -1,
      isMusicMenu: false,
      activeMusicMenu: -1,
      isPlaying: false,
      songs: songs(),
      currentSong: 1,
      currentSongDuration: 0,
      timeElapsed: 0,
    };

    this.myRef = React.createRef();
    this.timmer = null;
  }

  handleMenu = () => {
    if (this.state.isMusicMenu) {
      this.setState({
        isMenuOpen: true,
        isMusicMenu: !this.state.isMusicMenu,
        activeMenu: -1,
      });
      return;
    }

    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
      activeMenu: -1,
    });
  };

  handleRotation = (degree) => {
    this.setState({ degree });
  };

  handleSelection = () => {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  };

  handleActiveMenu = (index) => {
    if (this.state.isSelected) {
      if (this.state.isMusicMenu) {
        this.setState({
          activeMusicMenu: index,
        });
        this.setState({ isSelected: false });
        return;
      }

      this.setState({
        activeMenu: index,
      });
      this.setState({ isSelected: false });
    }
  };

  handleIsMusicMenu = () => {
    this.setState({
      isMusicMenu: !this.state.isMusicMenu,
      activeMusicMenu: -1,
    });
  };

  handlePlay = () => {
    this.setState({
      isPlaying: !this.state.isPlaying,
    });

    if (!this.state.isPlaying) {
      this.myRef.current.play();
    } else {
      this.myRef.current.pause();
    }

    this.setState({ currentSongDuration: this.myRef.current.duration });
  };

  handlePrevious = () => {
    clearInterval(this.timmer);
    this.setState({ timeElapsed: 0 });
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });

      this.myRef.current.pause();
    }

    let currentSong = this.state.currentSong;

    currentSong -= 1;

    if (currentSong < 0) {
      this.setState({
        isPlaying: true,
        currentSong: 4,
      });

      this.myRef.current.setAttribute(
        "src",
        this.state.songs[this.state.currentSong].audio
      );
      setTimeout(() => {
        this.myRef.current.play();
        this.setState({ currentSongDuration: this.myRef.current.duration });
      }, 1000);
    } else {
      this.setState({
        isPlaying: true,
        currentSong: currentSong,
      });

      this.myRef.current.setAttribute(
        "src",
        this.state.songs[this.state.currentSong].audio
      );
      setTimeout(() => {
        this.myRef.current.play();
        this.setState({ currentSongDuration: this.myRef.current.duration });
      }, 1000);
    }
  };

  handleNext = () => {
    clearInterval(this.timmer);
    this.setState({ timeElapsed: 0 });
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: !this.state.isPlaying,
      });

      this.myRef.current.pause();
    }

    let currentSong = this.state.currentSong;

    currentSong += 1;

    if (currentSong > 4) {
      this.setState({
        isPlaying: true,
        currentSong: 0,
      });

      this.myRef.current.setAttribute(
        "src",
        this.state.songs[this.state.currentSong].audio
      );
      setTimeout(() => {
        this.myRef.current.play();
        this.setState({ currentSongDuration: this.myRef.current.duration });
      }, 1000);
    } else {
      this.setState({
        isPlaying: true,
        currentSong: currentSong,
      });

      this.myRef.current.setAttribute(
        "src",
        this.state.songs[this.state.currentSong].audio
      );
      setTimeout(() => {
        this.myRef.current.play();
        this.setState({ currentSongDuration: this.myRef.current.duration });
      }, 1000);
    }
  };

  handleOnPlaying = () => {
    this.timmer = setInterval(() => {
      this.setState({ timeElapsed: this.state.timeElapsed + 1 });
    }, 1000);
  };

  handleOnPause = () => {
    if (this.state.timeElapsed + 3 > this.state.currentSongDuration) {
      this.handleNext();
    }

    clearInterval(this.timmer);
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.ipod}>
            <Display
              isMenuOpen={this.state.isMenuOpen}
              degree={this.state.degree}
              activeMenu={this.state.activeMenu}
              handleActiveMenu={this.handleActiveMenu}
              handleMenu={this.handleMenu}
              handleIsMusicMenu={this.handleIsMusicMenu}
              isMusicMenu={this.state.isMusicMenu}
              activeMusicMenu={this.state.activeMusicMenu}
              currentSongInfo={this.state.songs[this.state.currentSong]}
              isPlaying={this.state.isPlaying}
              currentSongDuration={this.state.currentSongDuration}
              timeElapsed={this.state.timeElapsed}
            />
            <Controller
              handleMenu={this.handleMenu}
              handlePlay={this.handlePlay}
              handleNext={this.handleNext}
              handlePrevious={this.handlePrevious}
              handleRotation={this.handleRotation}
              handleSelection={this.handleSelection}
            />
          </div>
        </div>
        <audio
          ref={this.myRef}
          src={this.state.songs[this.state.currentSong].audio}
          onPlaying={this.handleOnPlaying}
          onPause={this.handleOnPause}
        />
      </>
    );
  }
}

export default App;
