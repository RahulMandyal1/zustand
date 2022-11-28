import styled from "styled-components";
import useCounterStore from "./store/store";
import React, { useState } from "react";

const CounterContainer = styled.div`
  height: 50vh;
  widht: 400px;
`;
const Button = styled.button`
  padding: 8px;
  border: 1px solid #dddddd;
  background: #333;
  color: #fff;
`;

const App = () => {
  const [state, setState] = useState({
    increaseByfive: false,
    decreaseByfive: false,
  });
  const { count, increaseCounter, decreaseCounter } = useCounterStore(
    (state: any) => state
  );

  const handleCounterAction = (action: { type: string }): void => {
    if (action.type === "increase-by-five") {
      setState({
        ...state,
        increaseByfive: true,
      });
    }
    if (action.type === "decrease-by-five") {
      setState({
        ...state,
        decreaseByfive: true,
      });
    }
  };

  return (
    <CounterContainer>
      <h2>Counter value is : {count}</h2>
      <Button
        onClick={() => increaseCounter(state.increaseByfive && 5)}
        name="increment"
      >
        increase
      </Button>
      <Button
        onClick={() => decreaseCounter(state.decreaseByfive && count > 5 && 5)}
        name="decrement"
      >
        decrease
      </Button>
      <Button onClick={() => handleCounterAction({ type: "increase-by-five" })}>
        increase by 5
      </Button>
      <Button onClick={() => handleCounterAction({ type: "decrease-by-five" })}>
        decrease by 5
      </Button>
    </CounterContainer>
  );
};

export default App;
