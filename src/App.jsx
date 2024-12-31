import { useState } from "react";
import Title from "./components/Title";
import Counter from "./components/Counter";
import Parent from "./components/Parent";

function App() {
  // js code
  // let name = "Sita";

  // hooks
  // useState hooks syntax:
  // const [stateVariable, functionToUpdateThisState] = useState(initialValue);
  const [title, setTitle] = useState("Electronics");
  const [user, setUser] = useState({
    name: "Ram",
    age: 20,
    address: "Itahari",
  });

  function clickMe() {
    // name = "Ram";

    console.log("function called");
    console.log(name);

    setTitle("Clothings");

    setUser({
      name: "Hari",
      age: 30,
      address: "Dharan",
      phone: 987465132,
    });
  }

  // In return, write html code
  return (
    <div>
      <Parent />

      <hr />

      <Counter />

      <h2>Name: {name}</h2>
      <h2>Title: {title}</h2>
      <hr />
      <h2>Username: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>Address: {user.address}</h2>
      <h2>Phone: {user.phone}</h2>

      <Title label="Smartphones" />
      <Title label="Laptop" subTitle="Dell" />
      <Title label="Electronics" />
      <Title label="Clothing" />
      <Title label="Kitchen items" />
      <Title label="Bikes" />
      <button onClick={clickMe}>Click me</button>
    </div>
  );

  // don't write any code here
}

export default App;
