import { Button } from "antd";
import React, { memo, useMemo, useState } from "react";

export default function UseMemoV2() {
  const todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];
  const name = "Hoang A. Tuan";
  const [count, setCount] = useState(0);
  const setNum = (count) => {
    console.log("generating number");
    for (let i = 0; i < 1000000000; i++) {
      count += 1;
    }
    return 9806040610;
  };
  const num = useMemo(() => setNum(count), []);
  const increment = () => setCount(count + 1);
  console.log("ToDoApp rendered");
  return (
    <div className="todo">
      <MyName name={name} />
      <div className="flex">
        <p>Count: <span>{count}</span></p>
        <p>Number: <span>{num}</span></p>
      </div>
      <ToDoBox todos={todos} />
      <div className="flex center">
        <Button onClick={increment}>Increment</Button>
      </div>
    </div>
  );
}

const ToDoBox = memo(({ todos }) => {
  console.log("ToDoBox rendered");
  return (
    <div className="to-do-box">
      {todos.map((todo, idx) => (
        <input key={idx} placeholder={todo} disabled />
      ))}
    </div>
  );
});

const MyName = memo(({ name }) => {
  console.log("My name's Tuan");
  return <h1>{name}</h1>;
});
