import './App.css';
import NavElements from './Components/NavElements'
import TotalStats from './Components/TotalStats'
import UsersStats from './Components/UsersStats';

function App() {
  return (
    <div className="App">
      <NavElements/>
      <div className='Dashboard'>
      <TotalStats/>
      <UsersStats/>
      </div>
    </div>
  );
}

export default App;
