import './App.css';
import { useEffect } from 'react';
import Navbar from "./components/Navbar";

function App() {

  useEffect(() => {
    document.title = 'Personal Website';
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
