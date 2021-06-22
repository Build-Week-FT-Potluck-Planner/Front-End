import Edit from './components/Edit';
import Login from './components/Login'
import Signup from './components/Signup';
import PotluckList from './components/PotluckList';
import RegisterPotluck from './components/RegisterPotluck';
import RegisterHome from './components/RegisterHome';
import NavBar from './components/NavBar';
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Route exact path='/' component={PotluckList} />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={RegisterPotluck} />
      <Route path='/list' component={RegisterHome} />
      <Route path='/edit' component={Edit} />
    </div>
  );
}

export default App;
