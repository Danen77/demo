import { useReducer, useEffect, useRef } from 'react';
import stopwatchReducer from './StopwatchReducer';

const initialState = {
    isRunning: false,
    time: 0
  };

const Stopwatch = () => {
  const [state, dispatch] = useReducer(stopwatchReducer, initialState);
  const idRef = useRef(0);
  useEffect(() => {
    if (!state.isRunning) { 
      return; 
    }
    idRef.current = setInterval(() => dispatch({type: 'tick'}), 1000);
    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    };
  }, [state.isRunning]);
  
  return (
    <div>
      <div>{state.time}s</div>
      <button onClick={() => dispatch({ type: 'start' })}>
        Start
      </button>
      <button onClick={() => dispatch({ type: 'stop' })}>
        Stop
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;