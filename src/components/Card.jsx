import { useCounterStore } from "../store/test";

const Card = ({ children }) => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div>
      {children} {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync}>Increment async</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Card;
