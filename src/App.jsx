import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kobe-versus" element={<MainPage />} />
        <Route path="/kobe-versus/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
