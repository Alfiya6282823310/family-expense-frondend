import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/signup' element={<Signup/>}/>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;

  