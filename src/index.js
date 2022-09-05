import React, { crea } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UseStateExample from './useStateExample/UseStateExample';
import UseReducerExample from './useReducerExample/UseReducerExample';
import UseEffectExample from './useEffectExample/UseEffectExample';
import User from './useContextExample/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="useState" element={<UseStateExample />} />
              <Route path="useEffect" element={<UseEffectExample />} />
              <Route path="useContext" element={<User />} />
              <Route path="useReducer" element={<UseReducerExample />} />
            
            </Route>
          </Routes>
       
    </BrowserRouter>
  </React.StrictMode >
);

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
