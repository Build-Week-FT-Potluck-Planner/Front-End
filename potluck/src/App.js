import Login from './components/Login'
import Signup from './components/Signup';
import PotluckList from './components/PotluckList';
import DetailsPage from './components/DetailsPage';
import { Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Route exact path='/' component={PotluckList} />
      <Route path ='/signup' component={Signup} />
      <Route path ='/login' component={Login} />
      {/* <DetailsPage /> */}
    </div>
  );
}

export default App;
