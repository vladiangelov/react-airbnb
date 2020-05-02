import React from 'react';
import './App.css';
import FlatList from './components/FlatList';
import flats from './data/flats';
import SimpleMap from './components/SimpleMap';

function App() {

  const flats_imported = flats;

  return (
    <div className="App">
      <div className="left-scene">
        <FlatList flats={flats_imported} />
      </div>
      <div className="right-scene">

      </div>
    </div>
  );
}

export default App;
