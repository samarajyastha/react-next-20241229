import { useSelector } from "react-redux";

function ChildB() {
  const state = useSelector((state) => state.counter);
  
  return (
    <div
      style={{
        backgroundColor: "red",
        padding: "1rem",
      }}
    >
      <h2>Count in child B {state.count}</h2>
    </div>
  );
}

export default ChildB;
