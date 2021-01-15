import React from 'react';
import { Piece } from './Piece';

export const Board = ({ squares, onClick }) => {
  return (
    <div className="board">
      {squares.map((square, i) => (
        <Piece key={i} piece={square} changeValue={() => onClick(i)} />
      ))}
    </div>
  );
};
