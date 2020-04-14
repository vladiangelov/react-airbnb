import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
      <div class="card" style={{backgroundImage: "url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg')"}}>
        <div class="card-category">150 EUR</div>
        <div class="card-description">
          <h2>Super 60m2 in trendy neighborhood!</h2>
        </div>
        <a class="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat;
