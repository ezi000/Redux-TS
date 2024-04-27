import React from "react";
import { Counter } from "./components/Counter";
import { BodyDiv } from "./assets/styles/styles";

export const CounterPage = () => {
  return (
    <>
      <BodyDiv>
        <Counter />
      </BodyDiv>
    </>
  );
};
