import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import FavoriteColor from './useStateExample/FavouriteColor';
import Counter from './useStateExample/Counter'
import Timer from './useEffectExample/Timer'
import FetchData from './useEffectExample/DataFetchExample';
import User from './useContextExample/User';
import Stopwatch from './useReducerExample/Stopwatch';
import CounterR from './useReducerExample/CounterR';
import UseStateExample from './useStateExample/UseStateExample';
import UseReducerExample from './useReducerExample/UseReducerExample';
import UseEffectExample from './useEffectExample/UseEffectExample';
// import User from './useContextExample/User';
export const UserContext = createContext();

const App = () => {

  const [user, setUser] = useState("John Doe");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <header className="App-header">
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="useState">useState Example</Link> |{" "}
            <Link to="useEffect">useEffect Example</Link> |{" "}
            <Link to="/useContext">useContext Example</Link> |{" "}
            <Link to="useReducer">useReducer Example</Link> |{" "}
          </nav>
          <Outlet />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
