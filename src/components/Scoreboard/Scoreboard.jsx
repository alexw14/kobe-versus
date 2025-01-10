import './Scoreboard.css';

function Scoreboard({ gameData }) {
  console.log(gameData);
  return (
    <div className="scoreboard">
      <div className="date">{gameData.Date}</div>
      <div className="minutes-playee">Minutes Played: {gameData.MP}</div>
      <div className="points">Points: {gameData.PTS}</div>
      <div className="rebounds">Rebounds: {gameData.REB}</div>
      <div className="assists">Assists: {gameData.AST}</div>
      <div className="steals">Steals: {gameData.STL}</div>
      <div className="blocks">Blocks: {gameData.BLK}</div>
    </div>
  );
}

export default Scoreboard;
