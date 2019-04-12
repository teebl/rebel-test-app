import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: green;
  display: block;
  min-width: 200px;
  max-width: 400px;
  padding: 10px;
  border: none;
  box-shadow: 0 10px 6px -6px #777;
`;

const Button = props => {
  const { onButtonClicked, link } = props;

  const clickHandler = () => {
    if (onButtonClicked) {
      onButtonClicked();
    }
  };

  return (
    <StyledButton href={link ? link : null} onClick={clickHandler}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
