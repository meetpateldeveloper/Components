import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'descrement';
const SET_VALUE_TO_ADD = 'change-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state,action) => {
    if(action.type===INCREMENT_COUNT){return {...state,count: state.count+1}}
    if(action.type===DECREMENT_COUNT){return {...state,count: state.count-1}}
    if(action.type===SET_VALUE_TO_ADD){return {...state,valueToAdd: action.payload}}
    if(action.type===ADD_VALUE_TO_COUNT){return {...state,valueToAdd:0,count: state.valueToAdd+state.count}}
    return state;
}

function CounterPage({initialCount}) {
    const [state,dispatch] = useReducer(reducer,{count:initialCount, valueToAdd: 0,});

    const counterInc = ()=> {
        dispatch({
            type:INCREMENT_COUNT
        });
    }
    const counterDec = ()=> {
        dispatch({
            type:DECREMENT_COUNT
        });
    }

    const handleChange = (event)=>{
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        })
    }
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch({
            type:ADD_VALUE_TO_COUNT
        })
    }
  return (
    <Panel className="m-3">
      <h1 className="text-lg">Your Counter is {state.count}</h1>
      <div className="flex flex-row">
      <Button onClick={counterInc}>Increment</Button>
      <Button onClick={counterDec}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
      <input value={state.valueToAdd || ""}  onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
      <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
