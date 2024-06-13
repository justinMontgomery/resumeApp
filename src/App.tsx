import './App.css';
import { Logo } from './Logo';
import { History } from './History';
import { Skills } from './Skills';
import { Education } from './Education';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Justin Montgomery</h1>
          <Logo />
          <span>
            <a className="App-link" href="mailto:justin@montgomery.run">
              justin@montgomery.run
            </a>
          </span>
          <div>
            <span className="Icon">
              <a href="https://www.linkedin.com/in/justinmmontgomery/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </span>
            <span className="Icon">
              <a href="https://www.strava.com/athletes/18781585">
                <i className="fab fa-strava"></i>
              </a>
            </span>
          </div>
        </header>
        <br />
        <History />
        <br />
        <Skills />
        <br />
        <Education />
      </div>
    </>
  );
}

export default App;
