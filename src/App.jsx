// import Account from './pages/login/Acc.jsx'
import HomePage from './pages/Home/HomePage.jsx';
import Account from './pages/login/Acc.jsx';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from './components/Nav/nav.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/MovieOrTvDetails/info.jsx';
import Upcoming from './pages/upcoming/Upcoming.jsx';
import AuthProvider from './context/AuthContext.js';
import LoggendIn from './pages/logeedin.jsx';
import ForgetPassword from './pages/login/ui/forgetPassword.jsx';
import { useAuth } from './context/AuthContext.js';

function App() {

  const currentUser = useAuth()
  console.log(currentUser)
  return (
    <BrowserRouter>
      <AuthProvider>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/:id' element={<Info />}></Route>
          <Route path='/Upcoming' element={<Upcoming />}></Route>
          <Route path='/Account' element={currentUser ? <HomePage /> : <Account />}></Route>
          <Route path='/loggendIn' element={<LoggendIn />}></Route>
          <Route path='/ForgetPassword' element={<ForgetPassword />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
