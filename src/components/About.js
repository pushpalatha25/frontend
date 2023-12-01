import React from 'react';
import '../styles/About.css'; // Make sure to import your CSS file

const App = () => {
  return (
    <div>
      <header>
        <img src="image4.png" alt="Shridevi Logo" className="logo" />
        <h1>Shridevi Institute of Engineering and Technology</h1>
        <ul>
          <li><a href="home.html">HOME</a></li>
        </ul>
        <p>(SIET), Tumakuru, Karnataka</p>
      </header>

      <section id="about">
        <h2>About SIET</h2>
      
        <p>
          Shridevi Institute of Engineering and Technology (SIET), Tumakuru, Karnataka
          is affiliated to Visvesvaraya Technological University, Belagavi, Karnataka,
          and is approved by AICTE New Delhi. Shridevi Institute of Engineering and
          Technology is a brainchild of Honorable Dr. M. R. Hulinaykar, (Chairman and
          Managing Trustee, SCT, Tumakuru). He is the President of Sri Shridevi
          Charitable Trust (R.), which is running 12 Institutions under various streams
          of education. His love for education and care for his native district
          manifested itself in the form of this college.
        </p>
      </section>

      <section id="programs">
        <h2>Programs Offered</h2>
        <p>
          At present, College offers 7 Under-Graduate Programmes, 4 Post Graduate
          Programmes and 4 Ph.D. Research Programmes – covering “Engineering and
          Technology” and “Management” streams. Since 2006, 17+ Batches of Engineering
          students have successfully passed out and many of our students have pursued
          their higher studies in India or abroad and have well settled in their life.
        </p>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Shridevi Institute of Engineering and Technology. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
