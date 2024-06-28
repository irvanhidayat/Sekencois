import Navbar from './components/Navbar/Navbar';
import FAQ from './components/FaQ/Faq';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/footer';



import './App.css';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner/>
      <FAQ></FAQ>
      <Footer/>
    </>
  );
}

export default App;
