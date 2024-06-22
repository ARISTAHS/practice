import Gnb from './routes/Gnb.jsx';
import Home from './routes/Home.jsx';
import About from './routes/About.jsx';
import PortFolio from './routes/PortFolio.jsx';
import Footer from './routes/Footer.jsx';

function App() {
  return (
    <article id="wrap">
      <Gnb />
      <Home />
      <About />
      <PortFolio />
      <Footer />
    </article>
  );
}

export default App;
