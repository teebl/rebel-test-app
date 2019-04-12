import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  background-color: light-red;
`;

const StyledListItem = styled.li`
  :hover {
    background-color: red;
    opacity: 0.7;
  }
`;

const List = props => {
  const { listItems, deleteHandler } = props;

  const renderListItems = () => {
    const listPairs = Object.entries(listItems);
    //map each object element to a li with <key>=<value> format
    return listPairs.map((listPair, i) => (
      <StyledListItem
        key={i}
        onClick={() => {
          deleteHandler(listPair[0]);
        }}
      >
        <p>
          {listPair[0]}={listPair[1]}
        </p>
      </StyledListItem>
    ));
  };

  return <StyledList>{renderListItems()}</StyledList>;
};

export default List;
