login

import './App.css';
import SignIn from './components/SignIn';

function App() {
  return (
      <SignIn/>

import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Search/>}/>
    </Routes>
    </BrowserRouter>
    
 development
  );
}

export default App;

  