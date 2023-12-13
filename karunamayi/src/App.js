import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
import Team from './components/team/team';
import Donation from './components/donation/donation';
import Activity from './components/activity/activity';
import Disclaimer from './components/disclaimer&privacy/disclaimer';
import Privacy from './components/disclaimer&privacy/privacy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
