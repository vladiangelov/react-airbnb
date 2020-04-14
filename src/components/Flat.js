import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const { flat } = this.props;
    return (
      <div class="card" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${flat.imageUrl})`}}>
        <div class="card-category">{flat.price} {flat.priceCurrency}</div>
        <div class="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
