import { Button } from "antd";
import React, { memo, useCallback, useMemo, useState } from "react";

export default function UseCallbackV2() {
  const [todos, setTodos] = useState(["todo 1", "todo 2", "todo 3", "todo 4", "todo 5", "todo 6", "todo 7", "todo 8"]);
  const [count, setCount] = useState(0);
  const addTodo = useCallback(
    () => setTodos([...todos, `todo ${todos.length}`]),
    [todos]
  );
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
    <div className="todo relative">
      <div className="flex">
        <p>Count: <span>{count}</span></p>
        <p>Number: <span>{num}</span></p>
      </div>
      <ToDoBox todos={todos} addTodo={addTodo} />
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

const ToDoBox = memo(({ todos, addTodo }) => {
  console.log("ToDoBox rendered");
  return (
    <>
      <div className="to-do-box">
        {todos.map((todo, idx) => (
          <input key={idx} placeholder={todo} disabled />
        ))}
      </div>
      <Button onClick={addTodo}>Add todo</Button>
    </>
  );
});
