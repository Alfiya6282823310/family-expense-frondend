import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Add/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
