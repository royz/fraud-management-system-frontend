import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotId from "./components/auth/ForgotId";
import Frauds from "./components/frauds/Frauds";
import {createContext, useEffect, useState} from "react";

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState()

  const setAuth = (user) => {
    setUser(user)
    localStorage.setItem('auth', JSON.stringify(user))
  }

  const logOut = () => {
    setUser(null)
    localStorage.removeItem('auth')
  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setAuth(JSON.parse(localStorage.getItem('auth')))
    }
  }, [])

  return <Router>
    <AuthContext.Provider value={{user, setAuth, logOut}}>
      <Navbar/>
      <div id="main-content" className="container">
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/admin' render={() => <Login isAdminLogin={true}/>}/>
          <Route exact path={'/register'} component={Register}/>
          <Route exact path={'/dashboard'} component={Dashboard}/>
          <Route exact path={'/forgot-password'} component={ForgotPassword}/>
          <Route exact path={'/reset-password'} component={ResetPassword}/>
          <Route exact path={'/forgot-userid'} component={ForgotId}/>
        </Switch>
      </div>
      <Footer/>
    </AuthContext.Provider>
  </Router>
}

export default App;

