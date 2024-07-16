import Navbar from './components/Navbar/Navbar';
import FAQ from './components/FaQ/Faq';
import Banner from './components/Banner/Banner';
import Footer from './components/footer/footer';
import Popular from './components/Product/Populer/Populer';
import './App.css';
import NewColelctions from './components/Product/NewCollections/NewCollections';
import CategoryCircle from './components/listproduk/ListProduk';



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner />
      <CategoryCircle></CategoryCircle>
      <Popular />
      <NewColelctions></NewColelctions>
      <Footer/>
    </>
  );
}

export default App;
