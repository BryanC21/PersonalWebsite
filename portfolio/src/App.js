import './App.css';
import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {
    document.title = 'Personal Website';
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
