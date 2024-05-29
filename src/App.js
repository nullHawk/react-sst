import './App.css';
import Effect from './components/Effect/Effect';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
// import {a,b} from './Products'; // destructuring in JS
function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <Effect />
      <Products />
    </div>
  );
}

export default App;
