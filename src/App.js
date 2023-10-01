import {Routes, Route} from 'react-router-dom'
import './App.css';
import File from './components/pages/file/File';
import LandingPage from './components/pages/landingPage/LandingPage.js';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/file" element={<File/>}/>
      </Routes>
    </div>
  );
}

export default App;
