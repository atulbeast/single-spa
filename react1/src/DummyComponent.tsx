import React, { useState } from "react";

const DummyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={styles}>
      <h2>Dummy Component</h2>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

const styles:React.CSSProperties = {

    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    width: "200px",
    margin: "auto",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",

};

export default DummyComponent;