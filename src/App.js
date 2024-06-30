import logo from './logo.svg';
import './App.css';
import SignIn from './component/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter><Routes>
      <Route path='/signin' element={<SignIn/>}></Route>
      </Routes></BrowserRouter>

  );
}

export default App;
