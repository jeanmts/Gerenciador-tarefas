import './App.css'
import SignIn from './pages/Sign-In'
import SignUp from './pages/Sign-up';
import Content from './pages/Content';
import { Routes, Route, Outlet, Navigate} from 'react-router-dom'; 
import NotFound from './pages/Not-found';

import { getItem } from './utils/storage';
function App() {

function ProtectedRoutes({redirecTo}) {

  const isAuthenticated =  getItem('token');

  return isAuthenticated ? <Outlet/> : <Navigate to={ redirecTo }/>
}
  return (
    <div className="App">
      <Routes>
         <Route path="/">
          <Route path="/" element={<SignIn/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
        </Route>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route element={<ProtectedRoutes  redirecTo={'/sign-in'}/>}>
            <Route path="/main" element={<Content/>}/>
          </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  )
}

export default App;
