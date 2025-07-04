// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "./redux/features/counter/counterSlice";

import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";

function App() {
  // const { count } = useAppSelector((state: RootState) => state.counter);
  // const dispatch = useAppDispatch();
  return (
    <>
      <div></div>
      {/* <h1>Counter: {count}</h1> */}
      <div>
        <Navbar />
        <Outlet />
        {/* <button onClick={() => dispatch(increment())}>Increment 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment By 5{" "}
        </button> */}
      </div>
    </>
  );
}

export default App;
