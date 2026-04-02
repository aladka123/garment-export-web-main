import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Production from './components/Production';
import Products from './components/Products';
import Certificates from './components/Certificates';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Production />
      <Products />
      <Certificates />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
