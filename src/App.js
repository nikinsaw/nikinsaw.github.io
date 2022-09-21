import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
    const navigate = useNavigate();
    const navigateToProjects = useCallback( () => { navigate('projects')}, [navigate],)
    
  return (
    <div className="App">
      <body>
        <div className='Center-content'>

        <h1 className="Main-heading">Hey there! 👋</h1>
        <h2 className="Sub-heading">I'm <span className="Heading-span">Nikita Sawant</span>, 😊 </h2>

        <h3 className="Smaller-sub-heading">an <span className="Heading-span">Electronics Engineer</span> by degree, 🤓 <br/>
          a <span className="Heading-span">Software Developer</span> by profession, 😎<br/>
          and a curious <span className="Heading-span">art</span> and <span className="Heading-span">STEM enthusiast</span>. 🧐</h3>
        <p className="Description">
               Connect with me if you like or want to criticise my work. I would love to hear from you. 😄
        </p>
        <button className="Projects-button" title='Projects' onClick={navigateToProjects}></button>
        </div>
      </body>
    </div>
  );
}

export default App;
