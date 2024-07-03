import logo from './logo.svg';
import './App.css';
import SignIn from './Components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Search from './Components/Search';
import Add from './Components/Add';
import Home from './Components/Home';



function App() {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<SignIn/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/add' element={<Add/>}/>
     <Route path='/home' element={<Home/>}/>
     
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

  