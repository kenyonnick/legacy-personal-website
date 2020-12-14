import './reset.css';
import './App.css';
import NavBar from './components/NavBar.js';
import PortfolioGallery from './components/PortfolioGallery';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <PortfolioGallery />
      <Footer />
    </>
  );
}

export default App;
