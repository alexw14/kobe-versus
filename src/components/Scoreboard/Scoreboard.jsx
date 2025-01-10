import './Scoreboard.css';

function Scoreboard({ gameData }) {
  return (
    <div className="scoreboard">
      <div className="top-section">
        <div className="date">{gameData.Date}</div>
        <div className="minutes-playee">Minutes Played: {gameData.MP}</div>
      </div>
      <div className="bottom-section">
        <div className="points-section">
          <div className="points">{gameData.PTS}</div>
          <div className="text">PTS</div>
        </div>
        <div className="row">
          <div className="stat">
            <div className="number">
              {gameData.FG} / {gameData.FGA}
            </div>
            <div className="text">FG</div>
          </div>
          <div className="stat">
            <div className="number">
              {gameData.FT} / {gameData.FTA}
            </div>
            <div className="text">FT</div>
          </div>
        </div>
        <div className="row">
          <div className="stat">
            <div className="number">{gameData.REB}</div>
            <div className="text">REB</div>
          </div>
          <div className="stat">
            <div className="number">{gameData.AST}</div>
            <div className="text">AST</div>
          </div>
        </div>
        <div className="row">
          <div className="stat">
            <div className="number">{gameData.STL}</div>
            <div className="text">STL</div>
          </div>
          <div className="stat">
            <div className="number">{gameData.BLK}</div>
            <div className="text">BLK</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
