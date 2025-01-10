import Footer from '../components/Footer/Footer';
import './AboutPage.css';

function AboutPage() {
  const footerInfo = {
    text: 'home',
    path: '/kobe-versus',
  };

  return (
    <div className="app about-section">
      <div className="about-container">
        <div className="subtitle">About This App</div>
        <div className="body-text">
          Welcome to the Kobe Versus web app! This application is a tribute to
          one of the greatest basketball players of all time, Kobe Bryant. It
          showcases his incredible performances and iconic moments on the court.
        </div>
        <div className="subtitle">What You Can Do</div>
        <div className="body-text">
          Explore Kobe Bryant's highest-scoring games against all 30 NBA teams
          by selecting a team's logo from the main page. Dive into the stats
          that define his legacy and relive the magic of his unstoppable scoring
          performances.
        </div>
        <div className="subtitle">Acknowledgments</div>
        <div className="body-text">
          This web app is created to honor Kobe Bryant's legacy and keep his
          memory alive for basketball fans around the globe. Kobe's dedication
          to excellence, both on and off the court, continues to inspire us
          every day.
        </div>
      </div>
      <Footer footerInfo={footerInfo} />
    </div>
  );
}

export default AboutPage;
