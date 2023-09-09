import Contact from "./Contact";
import Home from "./Home";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/services" element={ <Services /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </div>
  );
}

export default App;
