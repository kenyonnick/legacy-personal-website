import './reset.css';
import './App.css';
import NavBar from './components/NavBar.js';
import PortfolioGallery from './components/PortfolioGallery';
import PortfolioItemFullView from './components/PortfolioItemFullView';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route exact={true} path="/" component={PortfolioGallery} />
        <Route path="/portfolio/:id" render={({ match }) => (
          <PortfolioItemFullView id={ match.params.id } />
        )}/>
      </Router>
      
      <Footer />
    </>
  );
}

export default App;
