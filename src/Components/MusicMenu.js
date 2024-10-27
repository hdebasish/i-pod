import { Component } from "react";
import styles from "../Styles/homemenu.module.css";

export default class MusicMenu extends Component {
  constructor() {
    super();

    this.state = {
      active: -1,
    };
  }

  static getDerivedStateFromProps(props, state) {
    let select = 0;

    if (props.degree <= 45) {
      select = parseInt((props.degree / 45) * 3);
    } else if (props.degree > 45 && props.degree <= 90) {
      select = parseInt((Math.abs(45 - props.degree) / 45) * 3);
    } else if (props.degree > 90 && props.degree <= 135) {
      select = parseInt((Math.abs(90 - props.degree) / 90) * 3);
    } else if (props.degree > 135 && props.degree <= 180) {
      select = parseInt((Math.abs(135 - props.degree) / 135) * 3);
    } else if (props.degree > 180 && props.degree <= 225) {
      select = parseInt((Math.abs(180 - props.degree) / 180) * 3);
    } else if (props.degree > 225 && props.degree <= 270) {
      select = parseInt((Math.abs(225 - props.degree) / 225) * 3);
    }else if (props.degree > 270 && props.degree <= 315) {
      select = parseInt((Math.abs(270 - props.degree) / 270) * 3);
    }else if (props.degree > 315 && props.degree <= 360) {
      select = parseInt((Math.abs(315 - props.degree) / 315) * 3);
    }

    console.log(select);

    return { active: select };
  }

  render() {
    return (
      <div className={styles.menuItemsContainer}>
        <h1>Music</h1>
        <ul>
          {this.state.active == 0 ? (
            <li className={styles.selectedItem}>All Songs</li>
          ) : (
            <li>All Songs</li>
          )}
          {this.state.active == 1 ? (
            <li className={styles.selectedItem}>Artists</li>
          ) : (
            <li>Artists</li>
          )}
          {this.state.active == 2 ? (
            <li className={styles.selectedItem}>Album</li>
          ) : (
            <li>Album</li>
          )}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.handleIsMusicMenu();
  }

  componentDidUpdate() {
    this.props.handleActiveMenu(this.state.active);
  }
}
