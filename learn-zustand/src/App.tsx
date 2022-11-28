import React from "react";
import styled from "styled-components";
import useCounterStore from "./store/store";

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
  const { count, increaseCounter, decreaseCounter } = useCounterStore(
    (state) => state
  );
  return (
    <CounterContainer>
      <h2>Counter value is : {count}</h2>
      <Button onClick={increaseCounter}>increase</Button>
      <Button onClick={decreaseCounter}>decrease</Button>
    </CounterContainer>
  );
};

export default App;
