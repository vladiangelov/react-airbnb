import React, { Component } from 'react';
import Flat from './Flat'


class FlatList extends Component {

  state = {
    activeFlatName: ""
  }

  activeFlat = (flat) => {
    this.setState({activeFlatName: flat})
  }

  render() {
    const { flats } = this.props;
    return flats.map((flat) => {
      return (
        <Flat flat={flat} key={flat.key} activeFlat={this.activeFlat} activeFlatName={this.state.activeFlatName}/>
        )
    });
  }
}

export default FlatList;
