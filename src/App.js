import React, { useState } from "react";
import { hot } from "react-hot-loader"; // keep state on reloads

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount((p) => p + 1)}>Increment</button>
    </div>
  );
}

const hotFunction = hot(module);
export default hotFunction(App);
