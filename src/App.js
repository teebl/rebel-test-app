import React, { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";

const StyledApp = styled.div`
  background: lightgrey;
`;

const App = () => {
  const [list, setList] = useState({});

  return (
    <StyledApp>
      <Button>Hey</Button>
    </StyledApp>
  );
};

export default App;
