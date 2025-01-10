import './Header.css';

function Header({ teams, selectedTeam, handleClick }) {
  const renderedTeamIcons = teams.map((teamName) => {
    const urlPath = `/kobe-versus/public/images/${teamName}.png`;
    return (
      <div
        key={teamName}
        className={`team-icon`}
        onClick={() => handleClick(teamName)}
      >
        <div className={teamName} />
      </div>
    );
  });

  const renderedSelectedTeam = (
    <div className={`selected-team ${selectedTeam}`}>
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
