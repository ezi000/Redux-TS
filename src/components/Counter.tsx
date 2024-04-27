import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "../features/counter/counterSlice";
import styled from "styled-components";
import { useState } from "react";
import { RootState } from "../app/store";

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(incrementByAmount(Number(inputValue) || 0));
  };

  return (
    <>
      <CountNumber>{count}</CountNumber>
      <CounterDiv>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </CounterDiv>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
      </form>
    </>
  );
};

const CounterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  margin: 20px 0 20px 0;
`;

const CountNumber = styled.div`
  font-size: 5rem;
`;
