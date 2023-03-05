import './App.css'
import Header from './components/Header'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-up';
import Main from './pages/Main';
import { Routes, Route } from 'react-router-dom'; 
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        </Route>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App
