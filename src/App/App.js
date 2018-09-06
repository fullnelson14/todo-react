import CounterModule from "../CounterModule/CounterModule";
import TodoModule from "../TodoModule/TodoModule";
import React from "react";

const App = () => {
  return (
    <div>
      <TodoModule />
      <CounterModule />
    </div>
  );
};

export default App;
