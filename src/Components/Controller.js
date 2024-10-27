import styles from "../Styles/controller.module.css";
import next from "../Images/next-track.png";
import previous from "../Images/previous-track.png";
import play from "../Images/pause-play.png";

import { Component } from "react";

export default class Controller extends Component {
  constructor() {
    super();

    this.degree = 0;
    this.rotation = 0;
    this.angle = 0;
    this.startAngle = 0;
    this.center = {
      x: 0,
      y: 0,
    };
    this.R2D = 180 / Math.PI;
    this.active = false;
    this.isValidClick = true;
  }

  handleMouseDown = (e) => {

    e.preventDefault();
    let bb = e.target.getBoundingClientRect(),
      t = bb.top,
      l = bb.left,
      h = bb.height,
      w = bb.width,
      x,
      y;
    this.center = {
      x: l + w / 2,
      y: t + h / 2,
    };
    x = e.clientX - this.center.x;
    y = e.clientY - this.center.y;
    this.startAngle = this.R2D * Math.atan2(y, x);
    this.active = true;
  };

  handleMouseUp = (e) => {

    e.preventDefault();
    this.angle += this.rotation;

    if (this.angle < 0) {
      this.degree = 360 + this.angle;
    } else {
      this.degree = this.angle;
    }

    this.active = false;

  };

  handleMouseMove = (e) => {
    e.preventDefault();
    if (this.active) {
      const handleRotation = this.props.handleRotation;

      let x = e.clientX - this.center.x,
        y = e.clientY - this.center.y,
        d = this.R2D * Math.atan2(y, x);

      this.rotation = d - this.startAngle;

      if (this.rotation < 0) {
        this.degree = 360 + this.rotation;
      } else {
        this.degree = this.rotation;
      }
      handleRotation(this.degree);
    } else {
      return;
    }
  };

  render() {
    const handleMenu = this.props.handleMenu;
    const handleSelection = this.props.handleSelection;
    const handlePlay = this.props.handlePlay;
    const handlePrevious = this.props.handlePrevious;
    const handleNext = this.props.handleNext;

    return (
      <div className={styles.controllerWrapper}>
        <div
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
          className={styles.controller}
          onMouseMove={this.handleMouseMove}
        >
          <div onClick={handleSelection} className={styles.actionButton}></div>
          <div
            className={`${styles.controlButton} ${styles.menuButton}`}
            onClick={this.isValidClick ? handleMenu : null}
          >
            MENU
          </div>
          <div className={`${styles.controlButton} ${styles.nextButton}`}>
            <img onClick={handleNext} src={next} alt="NEXT" />
          </div>
          <div className={`${styles.controlButton} ${styles.prevButton}`}>
            <img onClick={handlePrevious} src={previous} alt="PREV" />
          </div>
          <div
            onClick={handlePlay}
            className={`${styles.controlButton} ${styles.playButton}`}
          >
            <img src={play} alt="PLAY" />
          </div>
        </div>
      </div>
    );
  }
}
