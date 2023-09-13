import { Suspense } from "react";
import './components/Styles.css';


// components
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/footer";


const App = () => {
  return (
    <Suspense fallback={null}>
      <Header/>
      <Home/>
      <About/>
      <Footer/>
    </Suspense>
  );
};

export default App;
