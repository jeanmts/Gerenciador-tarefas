import './App.css'
import Header from './components/Header'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-up';
import Main from './pages/Main';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
         <Route path="/">
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Route>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/main" element={<Main/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
