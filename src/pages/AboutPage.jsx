import TextPanel from '../components/TextPanel/TextPanel';
import Footer from '../components/Footer/Footer';
import './AboutPage.css';

function AboutPage() {
  const aboutText = [
    {
      subtitle: 'About This App',
      bodyText:
        'Welcome to the Kobe Versus web app! This application is a tribute to one of the greatest basketball players of all time, Kobe Bryant. It showcases his incredible performances and iconic moments on the court.',
    },
    {
      subtitle: 'What You Can Do',
      bodyText:
        "Explore Kobe Bryant's highest-scoring games against all 30 NBA teams by selecting a team's logo from the main page. Dive into the stats that define his legacy and relive the magic of his unstoppable scoring performances.",
    },
    {
      subtitle: 'Acknowledgments',
      bodyText:
        "This web app is created to honor Kobe Bryant's legacy and keep his memory alive for basketball fans around the globe. Kobe's dedication to excellence, both on and off the court, continues to inspire us every day.",
    },
  ];

  const footerInfo = {
    text: 'home',
    path: '/kobe-versus',
  };

  return (
    <div className="app about-section">
      <TextPanel text={aboutText} />
      <Footer footerInfo={footerInfo} />
    </div>
  );
}

export default AboutPage;
