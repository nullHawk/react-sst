import { useState, useEffect} from 'react';
import NavBar from '../../NavBar/NavBar';
import TypeWriter from '../../Effect/TypeWriter';
import Tile from '../../Tile/Tile';
import ProgressBar from '../../ProgressBar/ProgressBar';
import Caraousel from '../../carousel';
import Effect from '../../Effect/Effect';

import "./HomePage.css";

function HomePage(){
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setProgress((prevProgress) => {
            if (prevProgress >= 100) {
            clearInterval(interval);
            return prevProgress;
            }
            return prevProgress + 10;
        });
        }, 1000);

        return () => {
        clearInterval(interval);
        };
    }, []);

    return(
        <div>
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
            <ProgressBar percentage = {progress}/>
            <Caraousel />
            <Effect />
        </div>
    )
}

export default HomePage;