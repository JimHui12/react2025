// setup useEffect hook to run some code when

// component renders for the first time

// whenever it re-renders

// some data in our component changed

import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [value, setValue] = useState(0);
  const [something, setSomething] = useState(0);
  // https://jsonplaceholder.typicode.com/todos
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  useEffect(() => {
    console.log("call useEffect");
    document.title = `Increment ${value}`;
  }, [value]);

  return (
    <div>
      UseEffectHook
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <button oncClick={() => setSomething(value + 1)}>
        Increment by something
      </button>
      <div>
        <ul>
          {data.map((todo) => (
            <section key={todo.id}>
              <li>{todo.title}</li>
              <li>{todo.body}</li>
            </section>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseEffectHook;
