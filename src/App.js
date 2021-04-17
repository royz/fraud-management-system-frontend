import './App.css';
import {Login} from './LoginComponent/Login'
import {useForm} from'react-hook-form';
import Registrationform from './RegistrationFormComponent/Registrationform';

function App() {
  return (
    <>
    {/* <Login/> */}
    <Registrationform/>
    </>
  );
}

export default App;

