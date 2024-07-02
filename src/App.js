import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Search from './components/Search';
import Add from './components/Add';
import Home from './components/Home';


function App() {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<SignIn/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/search' element={<Search/>}/>
     <Route path='/add' element={<Add/>}/>
     


    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

  