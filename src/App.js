import './App.css';
import Home from './main/home';
import logo from "./../src/assets/song_logo.svg"
import firebase from "./firebase";

function App() {
  
  return (
    <div className="h-screen flex flex-col">
      <Home/>
      <div className="song-image">
        <img src={logo} alt="logo"/>
      </div>
    </div>
  );
}

export default App;
