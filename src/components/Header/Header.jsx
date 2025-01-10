import './Header.css';
import gamesData from '../../data/games.json';

function Header() {
  const renderedTeamIcons = Object.keys(gamesData).map((teamName) => {
    const urlPath = `/kobe-versus/public/images/team-icons/${teamName}.png`;
    return (
      <div key={teamName} className="team-icon">
        <img src={urlPath}/>
      </div>
    )
  });

  return (
    <div className="header">
      <div className="main">Kobe Bryant vs.</div>
      <div className="team-list">{renderedTeamIcons}</div>
    </div>
  )
}

export default Header;
