
import './App.css';
import Header from "./components/header";
import avatar  from './assets/img/ava.png';
import hero  from './assets/img/hero.png';
import Hero from "./components/hero";
function App() {
  return (
    <div className="App">
      <Header
        avatar={avatar}
      />
      <Hero
        hero={hero}
        title='Lorem Ipsum is simply dummy text of the printing'
      />
    </div>
  );
}

export default App;
