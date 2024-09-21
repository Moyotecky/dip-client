import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BasicTabs from './components/Tabs';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Help from './Pages/Help';
import About from './Pages/About';
import Qoutes from './Pages/Qoutes';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import Forms from './forms/Forms';
import NoQuote from './components/NoQuote';
import CustomFormBox from './components/QuotesModal';
import QuotesModal from './components/QuotesModal';
// import MyQuotes
// import AboutUs from './AboutUs';
// import Help from './Help';

function App() {
  return (
    <Router>
      <Navbar />
      <BasicTabs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/my-quotes" element={<Qoutes />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/signup" element={<Forms/>} />
        <Route path="/product/:id" element={<ProductDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
