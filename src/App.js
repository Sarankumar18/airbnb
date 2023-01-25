import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from "./Components/Hero"
import "../src/Components/Main.css"
import Slider from './Components/Slider';



function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Slider/>
    </div>
  );
}

export default App;
