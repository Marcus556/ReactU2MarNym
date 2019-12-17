import React, { Component } from "react";
import styles from "./CardComponent.module.css";

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true,
      showInfo: false
    };
  }
  //
  showInfo = () => {
    !this.state.showInfo
      ? this.setState({ showInfo: true })
      : this.setState({ showInfo: false });
  };
  //setState på showContent till true eller false beroende på tidigare bool. true->false / false->true.
  toggleShowContent = () => {
    if (this.state.showContent === true) {
      this.setState({
        showContent: false
      });
    } else {
      this.setState({
        showContent: true
      });
    }
  };

  //om showConent är true returneras en <div> med {this.props.children}, dvs children till komponenten i app.js.
  renderCards = () => {
    if (this.state.showContent === true) {
      return <div className="container">{this.props.children}</div>;
    }
  };

  render() {
    if (this.props.info === undefined) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.cardHolder}>
            {this.renderCards()}

            <hr />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <div className={styles.cardHolder}>
            {this.renderCards()}

            <hr />

            {this.state.showInfo ? <p>{this.props.info}</p> : ""}
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={this.showInfo}
            >
              {this.state.showInfo ? "Hide info" : "Show info"}
            </button>
          </div>
        </div>
      );
    }
  }
}

export default CardComponent;

// <button className="btn btn-info" onClick={this.toggleShowContent}>Toggle</button>
