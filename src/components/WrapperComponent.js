import React, { Component } from 'react';
import styles from './WrapperComponent.module.css';

class WrapperComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showContent: true
    }
  }

  //setState på showContent till true eller false beroende på tidigare bool. true->false / false->true.
  toggleShowContent = () => {
    if (this.state.showContent === true) {
      this.setState({
        showContent: false
      })
    } else {
      this.setState({
        showContent: true
      })
    }
  }

  //om showConent är true returneras en <div> med {this.props.children}, dvs children till komponenten i app.js.
  renderCards = () => {
    if (this.state.showContent === true) {
      return <div className="container">{this.props.children}</div>
    }
  }


  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.cardHolder}>
          {this.renderCards()}

          <hr />
          <button className="btn btn-info" onClick={this.toggleShowContent}>Toggle</button>

        </div>
      </div>
    )
  }

}

export default WrapperComponent

