import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './component/Header';
import Slider from './component/Slider';
import About from './component/About';
import Services from './component/Services';
import Works from './component/Works';
import Teams from './component/Teams';
import Testimonial from './component/Testimonial';
import Pricing from './component/Pricing';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>

      <main>

        <Slider />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonial />
        <Pricing />
        <Blog />
        <Contact />

      </main>

      <footer id='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
