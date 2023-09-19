
import './App.css';
import Footer from './components/Footer';
import HeroComponent from './components/HeroComponent';
import Navbar from './components/Navbar';
import Packages from './components/Packages';
import WeKeep from './components/WeKeep';
import WhychooseUs from './components/WhychooseUs';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroComponent></HeroComponent>
      <WeKeep></WeKeep>
      <Packages></Packages>
      <WhychooseUs></WhychooseUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
