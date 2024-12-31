import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../redux/counter/counterSlice";

function ChildA() {
  const state = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function updateCount() {
    console.log("called");

    dispatch(increaseCounter(5));
  }

  return (
    <div
      style={{
        backgroundColor: "green",
        padding: "1rem",
      }}
    >
      <h2>Count in child A: {state.count}</h2>

      <button onClick={updateCount}>Update count</button>
    </div>
  );
}

export default ChildA;
