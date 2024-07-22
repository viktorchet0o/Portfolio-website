import React from 'react';
import './About.css';

const About: React.FC = () => (
  <div className="about">
    <h1>About Me</h1>
    <img src="/images/profile.jpg" alt="Viktor Petrov Todorov" className="profile-pic" />
    <p>As a security guard at the Council of Ministers of the Republic of Bulgaria, I ensure the safety and security...</p>
  </div>
);

export default About;
