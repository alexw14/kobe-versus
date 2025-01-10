import { Link } from 'react-router-dom';
import './Footer.css';

function Footer({ footerInfo }) {
  const { text, path } = footerInfo;
  return (
    <div className="footer">
      <Link to={path}>{text}</Link>
    </div>
  );
}

export default Footer;
