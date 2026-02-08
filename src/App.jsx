import { useState } from "react";
import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";
import Banner from "./components/Banner";
import Blank from "./components/Blank";
import Products from "./components/Products";
import About from "./components/About";
import Ceo from "./components/Ceo";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import Contact from "./components/Contact";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <HeaderOne />
      <HeaderTwo openSignUp={() => setShowSignUp(true)} />

      {showSignUp && <SignUpForm />}

      <Banner />
      <Blank />
      <Products />
      <About />
      <Ceo />
      <Newsletter openSignUp={() => setShowSignUp(true)} />
      <Footer />
    </>
  );
}

export default App;
