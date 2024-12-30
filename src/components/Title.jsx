/* eslint-disable react/prop-types */
// Hello world => Sentence case
// helloWorld => Camel case
// HelloWorld => Pascal case
// hello_world => Snake case

import { useState } from "react";

function Title(props) {
  // console.log(props.label);
  // console.log(props.subTitle);

  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <h1
        onClick={() => setIsClicked(true)}
        style={isClicked ? { color: "red" } : null}
      >
        hello
      </h1>
      <div>This is {props.label}</div>
    </>
  );
}

export default Title;
