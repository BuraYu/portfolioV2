import "./App.css";
import AOVIncetive from "./components/AOVIncentive/AOVIncetive";
import CrossSell from "./components/CrossSell/CrossSell";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Newsleter from "./components/Newsletter/Newsleter";
import Product from "./components/Product/Product";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Reviews from "./components/Reviews/Reviews";
import SocialMedia from "./components/SocialMedia/SocialMedia";

function App() {
  return (
    <>
      <Navbar />
      <AOVIncetive />
      <Product />
      <ProductInfo />
      <Reviews />
      <CrossSell />
      <SocialMedia />
      <Newsleter />
      <Footer />
    </>
  );
}

export default App;
