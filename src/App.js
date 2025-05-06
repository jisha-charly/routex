
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar1 from './components/Navbar1';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServiceSection';
import Footer from './components/Footer';


function App() {
  return (
    <div >
      <Navbar1/>
      <HeroSection/>
      <AboutUs/>
      <ServicesSection/>
      <Footer/>
    </div>
  );
}

export default App;
