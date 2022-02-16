import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import {HomePage} from './Components/HomePage';
import {Trending} from './Components/Trending.jsx';
import {Random} from './Components/Random';
import logo from '../src/img/logo2.png';
import {useDispatch, useSelector} from 'react-redux';
import Grid, {Item} from '@mui/material/Grid';

function App() {
  //const dispatch = useDispatch();
  //const giffs = useSelector(state=>state.giffs.giffs);



  return (
    <>
   <div className="wrapper">
     <div className="header">
   <div className="logotype">
      <img src={logo} alt="logotype" className="logo" />
    </div>
    <div className="navbar">
      <div className="navbar__links">
         <ul>
           
           <li><button><Link to="/trending">Trending</Link></button></li>
           <li><button><Link to="/random">Random</Link></button></li>
         </ul>

      </div>
    </div>
    </div>

    </div>



    <Routes>
       <Route path="/" element={<HomePage />}  />
       <Route path="/trending" element={<Trending />} />
       <Route path="/random" element={<Random />} />

    </Routes>


   
    </>
   
  );
}

export default App;
