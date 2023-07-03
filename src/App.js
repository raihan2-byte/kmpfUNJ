import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Routes from "./routes/routes";
import Navbar from "./components/navbar/Navbar";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
