import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

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
      </Switch>
    </div>
    <Footer/>
  </Router>
}

export default App;

