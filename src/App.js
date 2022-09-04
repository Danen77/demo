import logo from './logo.svg';
import './App.css';
import FavoriteColor from './useStateExample/FavouriteColor';
import Counter from './useStateExample/Counter'
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Fragment>
          <FavoriteColor />
          <Counter />
        </React.Fragment>

      </header>
    </div>
  );
}

export default App;
