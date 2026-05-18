import Header from "./components/Header";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";

export default function App(){
  return(
    <>
    <Header />
    <main>
      <Home />
      <Sobre />
      <Contato />
    </main>
    <Footer />
    </>
  )
}