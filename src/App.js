import './App.css';
import Effect from './components/Effect/Effect';
import Products from './components/Products/Products';
import NavBar from './components/NavBar/NavBar';
import TypeWriter from './components/Effect/TypeWriter';
import Tile from './components/Tile/Tile';
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
      <Tile
        header = "About Me"
        subHeader = "I am a Software Developer"
        img = "https://cdn.dribbble.com/users/3484830/screenshots/16787618/media/b134e73ef667b926c76d8ce3f962dba2.gif"
        text = "I am a Software Developer with a passion for developing scalable applications. I am currently working as a Machine Learning Research Intern at IIT Bombay. I am an aspiring Computer Scientist with a keen interest in developing efficient algorithms."
        link = "#"
        linkText = "Read More"
        position = "img-right"
      />
      <Effect />
      <Products />
    </div>
  );
}

export default App;
