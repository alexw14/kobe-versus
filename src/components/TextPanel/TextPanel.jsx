function TextPanel({ text }) {
  const renderedText = text.map((section) => {
    const { subtitle, bodyText } = section;
    return (
      <div key={subtitle}>
        <div className="subtitle">{subtitle}</div>
        <div className="body-text">{bodyText}</div>
      </div>
    );
  });
  return <div className="about-container">{renderedText}</div>;
}

export default TextPanel;
