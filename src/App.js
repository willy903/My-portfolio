import './App.css';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/NavBar';
import Services from './components/ourServices/Services';
import About from './components/aboutUs/About';
import Work from './components/latestwork/Work';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Services/>
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
