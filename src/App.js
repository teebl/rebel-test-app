import React, { useState, useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import Button from "./components/Button";
import List from "./components/List";

const KEY_VALUE_REGEX = /([\w|\d]+)(?:\s)*(?:=){1}(?:\s)*([\w|\d]+)/;
const FILENAME = "export.json";
const CONTENT_TYPE = "text/json;charset=utf-8,";

const StyledApp = styled.div`
  background: lightgrey;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-template-rows: 20% auto;
  grid-gap: 40px;
  padding: 0 40px;
`;

const TextFieldWrapper = styled.div`
  grid-column: span 2;
  background-color: orange;
`;

const ButtonWrapper = styled.div`
  background-color: grey;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ListWrapper = styled.div`
  flex-grow: 2;
  background-color: lightblue;
`;

const App = () => {
  const [list, setList] = useState({ key: "value", secondKey: "secondValue" });
  const [textField, setTextField] = useState("");
  const [JsonLink, setJsonLink] = useState("");

  useEffect(() => {
    setJsonLink(
      FILENAME + CONTENT_TYPE + encodeURIComponent(JSON.stringify(list))
    );
  }, [list]);

  const handleTextFieldChange = event => {
    setTextField(event.target.value);
  };

  const handleTextFieldSubmit = event => {
    event.preventDefault();
    if (checkKeyValueIsValid(textField)) {
      const [string, key, value] = parseKeyValue(textField);
      if (list[key]) {
        alert("a unique <key> is required");
        return;
      }
      const newList = { [key]: value, ...list };
      setList(newList);
      setTextField("");
    } else {
      alert("Must submit in a <key>=<value> format. Alphanumerics only");
    }
  };

  const checkKeyValueIsValid = string => KEY_VALUE_REGEX.test(string);

  const parseKeyValue = string => KEY_VALUE_REGEX.exec(string);

  const alphaByKey = () => {
    let newList = {};
    Object.keys(list)
      .sort()
      .forEach(key => {
        newList[key] = list[key];
      });

    setList(newList);
  };

  const alphaByValue = () => {
    let newList = {};
    Object.keys(list)
      .sort((a, b) => list[a].localeCompare(list[b]))
      .forEach(key => {
        newList[key] = list[key];
      });

    setList(newList);
  };

  const deleteHandler = key => {
    const newList = _.omit(list, key);
    setList(newList);
  };

  const clearHandler = () => {
    setList({});
    setTextField("");
  };

  return (
    <StyledApp>
      <TextFieldWrapper>
        <form onSubmit={handleTextFieldSubmit}>
          <label>
            <textarea value={textField} onChange={handleTextFieldChange} />
          </label>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </form>
      </TextFieldWrapper>
      <ButtonWrapper>
        <Button link={JsonLink}>Export to JSON</Button>
        <Button onButtonClicked={alphaByValue}>
          Sort Values Alphabetically
        </Button>
        <Button onButtonClicked={alphaByKey}>Sort keys Alphabetically</Button>
        <Button onButtonClicked={clearHandler}>Clear All</Button>
      </ButtonWrapper>
      <ListWrapper>
        <List listItems={list} deleteHandler={deleteHandler} />
      </ListWrapper>
    </StyledApp>
  );
};

export default App;
