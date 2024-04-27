import React from "react";
import { Link } from "react-router-dom";
import { BodyDiv } from "./assets/styles/styles";
import styled from "styled-components";

function App() {
  return (
    <>
      <BodyDiv>
        <Link to="counter">
          <Button>Go to Counter</Button>
        </Link>
        <Link to="blog">
          <Button>Go to Blog</Button>
        </Link>
      </BodyDiv>
    </>
  );
}

const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
`;
export default App;
