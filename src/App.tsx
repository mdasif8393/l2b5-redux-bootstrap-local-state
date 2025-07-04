import type { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div></div>
      <h1>Counter: {count}</h1>
      <div className="card">
        <Button>Button</Button>
        <button onClick={() => dispatch(increment())}>Increment 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By 5{" "}
        </button>
      </div>
    </>
  );
}

export default App;
