import './App.css';
import {useSelector, useDispatch} from "react-redux"
import { actions } from "./store/index"

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement()) 
  }
  const addBy = () => {
    dispatch(actions.addBy(10))
  }


  //--------------------EXAMPLE WITH --------------------------
  //<--the store before with the actions passed in an object-->
  
  // const addBy = () => {
  //   dispatch({ type: "ADD", payload: 10 })
  // }
  return (
    <div >
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addBy}>decrement</button>
    </div>
  );
}

export default App;
