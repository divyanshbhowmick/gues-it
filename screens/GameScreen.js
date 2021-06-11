import React from "react";
import GuessNumberContainer from "../components/GameScreen/GuessNumberContainer";

const GameScreen = (props) => {
  return <GuessNumberContainer selectedNumber={props.selectedNumber} />;
};

export default GameScreen;
