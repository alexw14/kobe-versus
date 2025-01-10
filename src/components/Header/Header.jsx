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
    <div className={`selected-team ${selectedTeam}`}></div>
  );

  let content = <div className="main">Kobe Bryant vs. </div>;
  if (selectedTeam) {
    content = (
      <div className="main selected">
        Kobe Bryant's highest scoring game vs. {renderedSelectedTeam}
      </div>
    );
  }

  return (
    <div className="header">
      {content}
      <div className="team-list">{selectedTeam ? null : renderedTeamIcons}</div>
    </div>
  );
}

export default Header;
