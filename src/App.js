import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Navbar from "./components/Footer/Navbar";
import Footer from "./components/Navbar/Footer";

function App() {
  return <Router>
    <Navbar/>
    <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path={'/register'} component={Register}/>
      </Switch>
    </main>
    <Footer/>
  </Router>
}

export default App;

