import './App.css';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/NavBar';
import Services from './components/ourServices/Services';
import About from './components/aboutUs/About';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
