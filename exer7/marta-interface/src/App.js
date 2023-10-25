import logo from './logo.svg';
import './App.css';
import LinesPage from './pages/LinesPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        {/* <Route index path = {"home"} element = {<HomePage />} /> */}
        <Route index element = {<HomePage />} />
        <Route path = {"about"} element = {<AboutPage />} />
        <Route path = {"linespage"}>
          <Route path = {"gold"} element = {<LinesPage color="GOLD"/>} />
          <Route path = {"red"} element = {<LinesPage color="RED"/>} />
          <Route path = {"blue"} element = {<LinesPage color="BLUE"/>} />
          <Route path = {"green"} element = {<LinesPage color="GREEN"/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
