import React, { useState } from 'react';
import { calculateWinner } from '../helpers/winner';
import { Board } from './Board';

export const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <div className="container">
      <div>
        <h1>Tic Tac Toe</h1>
        <Board squares={board} onClick={handleClick} />
        <div className="game">
          <p>
            {winner
              ? 'Winner: ' + winner
              : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
          </p>
          {renderMoves()}
        </div>
        <h3>By Julio Cesar Ramirez</h3>
      </div>
    </div>
  );
};
