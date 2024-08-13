import Showcase from './Showcase';
import './App.css';

function App() {
  const baseStats = {
    hp: 45,
    attack: 49,
    defense: 49,
    spAttack: 65,
    spDef: 65,
    speed: 45,
  };

  return (
    <div className='main-wrapper background'>
      <Showcase />
    </div>
  );
}

export default App;

