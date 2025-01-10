import { useState } from 'react';
import Header from './components/Header/Header';
import Scoreboard from './components/Scoreboard/Scoreboard';
import gamesData from './data/games.json';
import './App.css';

function App() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamData, setSelectedTeamData] = useState([]);

  const teams = Object.keys(gamesData);

  const handleClick = (team) => {
    setSelectedTeam(team);
    setSelectedTeamData(gamesData[team]);
  };

  const renderedScoreboard = selectedTeamData.map((gameData, index) => {
    return <Scoreboard key={`${selectedTeam}_${index}`} gameData={gameData} />;
  });

  return (
    <div className="app">
      <Header
        teams={teams}
        selectedTeam={selectedTeam}
        handleClick={handleClick}
      />
      {renderedScoreboard}
    </div>
  );
}

export default App;
