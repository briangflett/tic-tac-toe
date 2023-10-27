"use client"

import { useState } from 'react';
  const player2Symbol = 'O';

function Settings() {
/*
function Settings({ onPlayer2SymbolChange }) {
  const [player2Symbol, setPlayer2Symbol] = useState('O');

  function handlePlayer2SymbolChange(event) {
    const newPlayer2Symbol = event.target.value;
    setPlayer2Symbol(newPlayer2Symbol);
    onPlayer2SymbolChange(newPlayer2Symbol);
  }
*/

  return (
    <div>
      <h2>Settings</h2>
      <label>
        <input
          type="radio"
          name="player2Symbol"
          value="O"
          checked={player2Symbol === 'O'}
//          onChange={handlePlayer2SymbolChange}
        />
        Player 2 symbol: O
      </label>
      <label>
        <input
          type="radio"
          name="player2Symbol"
          value="Y"
          checked={player2Symbol === 'Y'}
//          onChange={handlePlayer2SymbolChange}
        />
        Player 2 symbol: Y
      </label>
    </div>
  );
}

export default Settings;