import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import ForgotId from "./components/auth/ForgotId";
import Frauds from "./components/frauds/Frauds";

function App() {
  return <Router>
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
        <Route exact path={'/frauds'} component={Frauds}/>
      </Switch>
    </div>
    <Footer/>
  </Router>
}

export default App;

