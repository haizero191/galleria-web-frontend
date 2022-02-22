import './App.css';
import { Routes } from "./routes/Routes";
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
