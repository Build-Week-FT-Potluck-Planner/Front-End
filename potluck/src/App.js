import Login from './components/Login'
import Signup from './components/Signup';
import PotluckList from './components/PotluckList';
import DetailsPage from './components/DetailsPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <PotluckList />
      <DetailsPage />
    </div>
  );
}

export default App;
