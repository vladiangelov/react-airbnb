import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  changeColor = () => {
    this.props.activeFlat(this.props.flat.name);
  }

  render() {
    const { flat } = this.props;
    let btn_class = this.props.activeFlatName === this.props.flat.name ? "card red-border" : "card";


    return (
      <div
        className={btn_class}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${flat.imageUrl})`}}
        onClick={this.changeColor}>
        <div className="card-category">{flat.price} {flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
