import { useEffect, useRef, useState } from "react";
import { fetchProducts } from "../api/api";

function Counter() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(0);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const {loading, data, error} = query("api url")

  const inputRef = useRef(null);

  function updateCounter() {
    setCount(count + 1);
  }

  function updateMultiplier() {
    setMultiplier(count);
  }

  /**
   * useEffect: Used for side-effects (re-render)
   * Syntax:
   * useEffect( function, dependency array )
   * for e.g: useEffect( ()=> {} ,  [] )
   */

  useEffect(() => {
    setLoading(true);
    console.log("hello world");
    // for e.g. fetch some data from API
    fetchProducts()
      .then((data) => setData(data))
      .catch((error) => console.log(error));

    setLoading(false); // Empty array means the code inside useEffect is called only once or only in 1st render
  }, [count]);

  console.log(inputRef.current);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>
        Multiplied Value: 2 x {multiplier} = {2 * multiplier}
      </h1>

      <button onClick={updateCounter}>Count +</button>
      <button onClick={updateMultiplier}>Multiplier x</button>
      <hr />
      <input type="text" id="name" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = "some text";
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Counter;
