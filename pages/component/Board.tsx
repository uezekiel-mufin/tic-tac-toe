import React from "react";

type Player = {
  activePlayer: string;
  setClicked: string;
  clicked: string;
  value: string;
  onClick: () => void;
};

const Board = ({ activePlayer, onClick, value }: Player) => {
  if (!value) {
    return <button className='square' onClick={onClick}></button>;
  }
  return (
    <button
      disabled
      className={`square ${value === "O" ? "square_O" : "square_X"}`}
    >
      {value}
    </button>
  );
};

export default Board;
