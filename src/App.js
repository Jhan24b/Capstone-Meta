import './App.css';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import Specials from './components/Specials/specials';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <Specials/>
      </main>
    </div>
  );
}

export default App;