import "./App.scss";
import Header from "./components/Header";
import avatar from "./assets/img/ava.png";
import hero from "./assets/img/hero.png";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Filter from "./components/Filters";
function App() {
  return (
    <div className="app">
      <Header avatar={avatar} />
      <Hero
        hero={hero}
        title="Lorem Ipsum is simply dummy text of the printing"
      />
      <div className="app__wrap">
        <div className="app__left">
          <Filter />
        </div>

        <div className="app__right">
          <Shop />
        </div>
      </div>
    </div>
  );
}

export default App;
