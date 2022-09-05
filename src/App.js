import React, { useState, createContext } from 'react';
import './App.css';
import {
  Link,
  Outlet
} from "react-router-dom";
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
            <Link to="useContext">useContext Example</Link> |{" "}
            <Link to="useReducer">useReducer Example</Link> |{" "}
          </nav>
          <Outlet />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
