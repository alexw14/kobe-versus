import { useState } from 'react';
import Header from '../components/Header/Header';
import Scoreboard from '../components/Scoreboard/Scoreboard';
import Footer from '../components/Footer/Footer';
import TextPanel from '../components/TextPanel/TextPanel';
import gamesData from '../data/games.json';
import '../App.css';
import '../Teams.css';

function MainPage() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamData, setSelectedTeamData] = useState([]);

  const teams = Object.keys(gamesData);

  const handleClick = (team) => {
    setSelectedTeam(team);
    setSelectedTeamData(gamesData[team]);
  };

  const handleSelectTeam = () => {
    setSelectedTeam(null);
    setSelectedTeamData([]);
  };

  const renderedScoreboard = selectedTeamData.map((gameData, index) => {
    return <Scoreboard key={`${selectedTeam}_${index}`} gameData={gameData} />;
  });

  const renderedSelectAnotherTeam = selectedTeam ? (
    <div className="select-another-team" onClick={() => handleSelectTeam()}>
      Select another team
    </div>
  ) : null;

  const aboutLakersText = [
    {
      subtitle: '',
      bodyText:
        "Kobe Bryant spent his entire 20-year career with the Los Angeles Lakers, where he built a legacy that will forever be remembered. From his five NBA championships to his 81-point game, Kobe's journey as a Laker was legendary. Thank you, Kobe, for being the heart of the Lakers and an inspiration to the world.",
    },
  ];

  const footerInfo = {
    text: 'About',
    path: '/kobe-versus/about',
  };

  return (
    <div className="app">
      <div className="container">
        <Header
          teams={teams}
          selectedTeam={selectedTeam}
          handleClick={handleClick}
        />
        <div className="scoreboard-container">
          {selectedTeam === 'lakers' ? (
            <TextPanel text={aboutLakersText} />
          ) : (
            renderedScoreboard
          )}
        </div>
        {renderedSelectAnotherTeam}
      </div>
      <Footer footerInfo={footerInfo} />
    </div>
  );
}

export default MainPage;
