import './App.css';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/NavBar';
import Services from './components/ourServices/Services';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
    </div>
  );
}

export default App;
