import { useReducer} from 'react';
import counterReducer from './CounterReducer';

const initialState = {count: 0};

const CounterR = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
      <div>
        <div>Count: {state.count}</div>
        
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      </div>
    );
  }

  export default CounterR;