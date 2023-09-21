import './index.css'
import Counter from './components/Counter';
import SubscribeBlock from './components/SubscribeBlock';
import './BanknoteAnimation.css'

function App() {
  return (
    <div>
      <div className="background-container">
        <div className="background" />
      </div>
      <div className="content">
        <Counter />
        <SubscribeBlock />
      </div>
    </div>
 
  );
}

export default App;
