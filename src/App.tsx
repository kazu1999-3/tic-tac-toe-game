import { useState } from 'react';
import './App.css';

type Player = 'X' | 'O' | null;
type GameResult = 'X' | 'O' | 'Draw' | null;
type Board = Player[];

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<GameResult>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]             // diagonals
  ];

  const checkWinner = (currentBoard: Board): { winner: 'X' | 'O' | null; line: number[] } => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return { winner: currentBoard[a], line: combination };
      }
    }
    return { winner: null, line: [] };
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result.winner) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else if (newBoard.every(cell => cell !== null)) {
      setWinner('Draw');
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setWinningLine([]);
  };

  const getStatusMessage = () => {
    if (winner === 'Draw') return '引き分け！';
    if (winner) return `${winner} の勝利！`;
    return `現在のプレイヤー: ${currentPlayer}`;
  };

  return (
    <div className="app">
      <h1>○×ゲーム</h1>
      <div className="status">{getStatusMessage()}</div>
      <div className="board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`cell ${cell ? 'filled' : ''} ${
              winningLine.includes(index) ? 'winning' : ''
            }`}
            onClick={() => handleClick(index)}
            disabled={!!cell || !!winner}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        リセット
      </button>
    </div>
  );
}

export default App;
