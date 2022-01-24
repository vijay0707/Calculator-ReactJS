import React from "react";
import Button from "./Button/Button";
import ButtonPad from "./ButtonPad/ButtonPad";
import Display from "./Display/Display";
import { useSelector, useDispatch } from "react-redux";
import { calculate, clear, backSpace, buttonClick } from "./actions";

const App = () => {
  const display = useSelector((state) => {
    return state.calculateReducer;
  });

  const dispatch = useDispatch();

  return (
    <div className="App ui center aligned container">
      <h1 className="heading"> CALCULATOR </h1>
      <Display data={display} />
      <ButtonPad>
        <Button
          label="9"
          value="9"
          onClick={() => {
            dispatch(buttonClick(9));
          }}
        />
        <Button
          label="4"
          value="4"
          onClick={() => {
            dispatch(buttonClick(4));
          }}
        />
        <Button
          label="3"
          value="3"
          onClick={() => {
            dispatch(buttonClick(3));
          }}
        />
        <Button
          label={<>&#8592;</>}
          value="clear"
          color="red"
          onClick={() => {
            dispatch(backSpace());
          }}
        />
        <Button
          label="8"
          value="8"
          onClick={() => {
            dispatch(buttonClick(8));
          }}
        />
        <Button
          label="5"
          value="5"
          onClick={() => {
            dispatch(buttonClick(5));
          }}
        />
        <Button
          label="2"
          value="2"
          onClick={() => {
            dispatch(buttonClick(2));
          }}
        />
        <Button
          label="0"
          value="0"
          onClick={() => {
            dispatch(buttonClick(0));
          }}
        />
        <Button
          label="7"
          value="7"
          onClick={() => {
            dispatch(buttonClick(7));
          }}
        />
        <Button
          label="6"
          value="6"
          onClick={() => {
            dispatch(buttonClick(6));
          }}
        />
        <Button
          label="1"
          value="1"
          onClick={() => {
            dispatch(buttonClick(1));
          }}
        />
        <Button
          label="."
          value="."
          onClick={() => {
            dispatch(buttonClick("."));
          }}
        />
        <Button
          label="*"
          value="*"
          color="purple"
          onClick={() => {
            dispatch(buttonClick("*"));
          }}
        />
        <Button
          label="-"
          value="-"
          color="purple"
          onClick={() => {
            dispatch(buttonClick("-"));
          }}
        />
        <Button
          label="+"
          value="+"
          color="purple"
          onClick={() => {
            dispatch(buttonClick("+"));
          }}
        />
        <Button
          label="/"
          value="/"
          color="purple"
          onClick={() => {
            dispatch(buttonClick("/"));
          }}
        />
        <Button
          label="AC"
          value="allClear"
          color="red"
          size="2"
          onClick={() => {
            dispatch(clear());
          }}
        />
        <Button
          label="="
          value="equal"
          color="green"
          size="2"
          onClick={() => {
            dispatch(calculate());
          }}
        />
      </ButtonPad>
      <br /> <br /> <br />
      <a href="https://github.com/vijay0707">
        <i className="github huge icon"> </i> <h2> Vijay </h2>
      </a>
    </div>
  );
};

export default App;
