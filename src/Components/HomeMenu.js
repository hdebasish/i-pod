import { Component } from "react";
import styles from "../Styles/homemenu.module.css";

export default class HomeMenu extends Component {
  constructor() {
    super();

    this.state = {
      active: -1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    let select = 0;

    if (props.degree <= 45) {
      select = parseInt((props.degree / 45) * 4);
    } else if (props.degree > 45 && props.degree <= 90) {
      select = parseInt((Math.abs(45 - props.degree) / 45) * 4);
    } else if (props.degree > 90 && props.degree <= 135) {
      select = parseInt((Math.abs(90 - props.degree) / 90) * 4);
    } else if (props.degree > 135 && props.degree <= 180) {
      select = parseInt((Math.abs(135 - props.degree) / 135) * 4);
    } else if (props.degree > 180 && props.degree <= 225) {
      select = parseInt((Math.abs(180 - props.degree) / 180) * 4);
    } else if (props.degree > 225 && props.degree <= 270) {
      select = parseInt((Math.abs(225 - props.degree) / 225) * 4);
    }else if (props.degree > 270 && props.degree <= 315) {
      select = parseInt((Math.abs(270 - props.degree) / 270) * 4);
    }else if (props.degree > 315 && props.degree <= 360) {
      select = parseInt((Math.abs(315 - props.degree) / 315) * 4);
    }


    return { active: select };
  }

  render() {
    return (
      <div className={styles.menuItemsContainer}>
        <h1>iPod</h1>
        <ul>
          {this.state.active == 0 ? (
            <li className={styles.selectedItem}>Cover Flow</li>
          ) : (
            <li>Cover Flow</li>
          )}
          {this.state.active == 1 ? (
            <li className={styles.selectedItem}>Music</li>
          ) : (
            <li>Music</li>
          )}
          {this.state.active == 2 ? (
            <li className={styles.selectedItem}>Games</li>
          ) : (
            <li>Games</li>
          )}
          {this.state.active == 3 ? (
            <li className={styles.selectedItem}>Settings</li>
          ) : (
            <li>Settings</li>
          )}
        </ul>
      </div>
    );
  }

  componentDidUpdate() {
    this.props.handleActiveMenu(this.state.active);
  }
}
