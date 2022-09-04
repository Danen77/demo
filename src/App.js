import React, { useState, createContext } from 'react';
import './App.css';
import FavoriteColor from './useStateExample/FavouriteColor';
import Counter from './useStateExample/Counter'
import Timer from './useEffectExample/Timer'
import FetchData from './useEffectExample/DataFetchExample';
import User from './useContextExample/User';
export const UserContext = createContext();

const App = () => {
  
  const [user, setUser] = useState("John Doe");
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
        <header className="App-header">
          <div className='solid'>
            <h2>useState</h2>
            <FavoriteColor />
            <Counter />
          </div>
          <div className='solid'>
            <h2>useEffect</h2>
            <Timer />
            <FetchData />
          </div>
          <div className='solid'>
            <h2>useContext</h2>
            <User />
          </div>
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
