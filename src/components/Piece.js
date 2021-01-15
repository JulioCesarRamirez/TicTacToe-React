import React from 'react';

export const Piece = ({ piece , changeValue }) => {
  return (
    <button className="piece" onClick={changeValue}>{piece}</button>
  );
};
