import React, { Component } from 'react';
import './App.css';
import FlatList from './components/FlatList';
import flats from './data/flats';
import GoogleMapReact from 'google-map-react';

const Marker = () => <div className="marker">&nbsp;</div>;

class App extends Component {

  render() {
    const flats_imported = flats;

    const center = () => {
      return {
        lat: 51.12,
        lng: -0.159
      };
    }


    return (
      <div className="App">
        <div className="left-scene">
          <FlatList flats={flats_imported} />
        </div>
        <div className="right-scene">
          <GoogleMapReact
            defaultCenter={center()}
            defaultZoom={15}
            bootstrapURLKeys={{ key: process.env.REACT_APP_APIKEY }}>
            <Marker />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
