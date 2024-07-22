import React from 'react';
import './Home.css';

const Home: React.FC = () => (
  <div className="home">
    <h1>Welcome to My Portfolio</h1>
    <p>Explore my journey and skills in quality assurance and software technologies.</p>
    <button onClick={() => window.location.href='/about'}>Learn More About Me</button>
  </div>
);

export default Home;
