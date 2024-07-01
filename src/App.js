
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}></Route></Routes></BrowserRouter>
  );
}

export default App;

  