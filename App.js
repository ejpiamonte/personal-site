import './App.css';

import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Family from './pages/family/Family';
import Fitness from './pages/fitness/Fitness';
import Food from './pages/food/Food';
import Hobbies from './pages/hobbies/Hobbies';
import Travel from './pages/travel/Travel';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path ='/' element={ < Home />} />
      <Route path ='/login' element={ < Login />} />
      <Route path ='/register' element={ < Register />} />
      <Route path ='/family' element={ < Family />} />
      <Route path ='/fitness' element={ < Fitness />} />
      <Route path ='/food' element={ < Food />} />
      <Route path ='/hobbies' element={ < Hobbies />} />
      <Route path ='/travel' element={ < Travel />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
