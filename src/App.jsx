// import Account from './pages/login/Acc.jsx'
import HomePage from './pages/Home/HomePage.jsx';
import Account from './pages/login/Acc.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from './components/Nav/nav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/MovieOrTvDetails/info.jsx';
import Upcoming from './pages/upcoming/Upcoming.jsx';



import "preline/preline";

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/:id' element={<Info />}></Route>
        <Route path='/Upcoming' element={<Upcoming />}></Route>
        <Route path='/Account' element={<Account />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
