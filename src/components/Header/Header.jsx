import './Header.css';

function Header({ teams, selectedTeam, handleClick }) {
  const renderedTeamIcons = teams.map((teamName) => {
    const urlPath = `/kobe-versus/public/images/team-icons/${teamName}.png`;
    return (
      <div
        key={teamName}
        className="team-icon"
        onClick={() => handleClick(teamName)}
      >
        <img src={urlPath} />
      </div>
    );
  });

  const renderedSelectedTeam = (
    <div className="selected-team">
      <img src={`/kobe-versus/public/images/team-icons/${selectedTeam}.png`} />
    </div>
  );

  return (
    <div className="header">
      <div className="main">
        Kobe Bryant vs. {selectedTeam ? renderedSelectedTeam : null}
      </div>
      <div className="team-list">{selectedTeam ? null : renderedTeamIcons}</div>
    </div>
  );
}

export default Header;
