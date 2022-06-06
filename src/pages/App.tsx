import { About } from "../components/About";
import { CardsServices } from "../components/CardsServices";
import { Contact } from "../components/Contact";
import { Depositions } from "../components/Depositions";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";

function App() {
  return (
    <>
      <Home />
      <CardsServices />
      <About />
      <Depositions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
