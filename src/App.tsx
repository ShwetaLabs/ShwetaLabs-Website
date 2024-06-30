import logo from './logo.svg';
import './App.css';
import {StaggeredPara} from './components/paragraph/StaggeredPara';
import { paraData } from './data/test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit the file <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

	  <StaggeredPara paras={paraData} />
    </div>
  );
}

export default App;
