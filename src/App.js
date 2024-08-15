import './App.css';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Signuprider from './component/Signuprider';
import Signupridesharer from './component/Signupridesharer';
import Loginrider from './component/Loginrider';
import Loginridesharer from './component/Loginridesharer';
import Rider from './component/Rider';
import Riderbook from './component/Riderbook';
import Riderprofile from './component/Riderprofile';
import Riderhistory from './component/Riderhistory';
import Offer from './component/Offer';
import Sharer from './component/Sharer';
import Offers from './component/Offers';
import Sharerprofile from './component/Sharerprofile';
import ForgotPassrider from './component/forgotpassrider';
import ForgotPasssharer from './component/forgotpasssharer';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/home" element={<Home/>}/>
<Route path='/aboutus' element={<AboutUs/>}/>
<Route path='/contactus' element={<ContactUs/>}/>
<Route path='/signup' element={<SignUp/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signuprider' element={<Signuprider/>}/>
<Route path='/signupridesharer' element={<Signupridesharer/>}/>
<Route path='/loginrider' element={<Loginrider/>}/>
<Route path='/loginridesharer' element={<Loginridesharer/>}/>
<Route path='/rider' element={<Rider/>}/>
<Route path='/riderbook' element={<Riderbook/>}/>
<Route path='/riderprofile' element={<Riderprofile/>}/>
<Route path='/riderhistory' element={<Riderhistory/>}/>
<Route path='/sharer' element={<Sharer/>}/>
<Route path='/offer' element={<Offer/>}/>
<Route path='/offers' element={<Offers/>}/>
<Route path='/sharerprofile' element={<Sharerprofile/>}/>
<Route path='/forgotpassrider' element={<ForgotPassrider/>}/>
<Route path='/forgotpasssharer' element={<ForgotPasssharer/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
