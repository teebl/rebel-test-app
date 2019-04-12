import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: green;
`;

const Button = props => {
  const clickHandler = () => {
    alert("Clicked!");
  };

  return <StyledButton onClick={clickHandler}>{props.children}</StyledButton>;
};

export default Button;
