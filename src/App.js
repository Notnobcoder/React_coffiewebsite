import { BrowserRouter, Route, Routes ,useLocation } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import {About} from "./Components/About/About";
import {Menu} from "./Components/Menu/Menu"
import {Contact} from "./Components/Contact"
import {AnimatePresence} from "framer-motion/dist/framer-motion"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatePresence>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/menu' element={ <Menu /> } />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </div>
  );
}

export default App;
