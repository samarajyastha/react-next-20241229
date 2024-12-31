import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () => {
  return (
    <div
      style={{
        backgroundColor: "#efefef",
        padding: "1rem",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Parent</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ChildA />
        <ChildB />
      </div>
    </div>
  );
};

export default Parent;
