import './App.css';
import Effect from './components/Effect/Effect';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import TypeWriter from './components/Effect/TypeWriter';
// import {a,b} from './Products'; // destructuring in JS
function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <TypeWriter texts = {[
        "Software Developer",
        "ML Research Intern at IIT Bombay",
        "Aspiring Computer Scientist"
      ]}
      typingSpeed= {100}
      deletingSpeed = {50}
      pauseDuration = {1000}/>
      <Effect />
      <Products />
    </div>
  );
}

export default App;
