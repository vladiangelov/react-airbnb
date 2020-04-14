import React, { Component } from 'react';


class FlatList extends Component {
  render() {
    return this.props.flats.map((flat) => {
      // console.log(flat)
      return (
        <div class="card" style={{backgroundImage: `url(${flat.imageUrl})`}}>
          <div class="card-category">{flat.price}{flat.priceCurrency}</div>
          <div class="card-description">
            <h2>{flat.name}</h2>
          </div>
          <a class="card-link" href="#"></a>
        </div>
        )
    });
  }
}

export default FlatList;
