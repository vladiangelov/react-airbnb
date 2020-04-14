import React, { Component } from 'react';
import Flat from './Flat'


class FlatList extends Component {

  render() {
    const { flats } = this.props;
    return flats.map((flat) => {
      return (
        <Flat flat={flat} key={flat.key} />
        )
    });
  }
}

export default FlatList;
