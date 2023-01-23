import React from 'react';
import {Header} from './components'
import './App.css';
import {headerListItems} from './data'

const App = () => {
  return (
    <div className="App">
      <Header listItems={headerListItems} />
        <div className='Center-content'>
          <div className='Text-wrapper'>
            <h1 className="Main-heading">Hey there! 👋</h1>
            <h2 className="Sub-heading">My name is <span className="Heading-span">Nikita Sawant</span>, 😊 </h2>
            <h3 className="Smaller-sub-heading">I'm an <span className="Heading-span">Electronics Engineer</span> 🤓
              and a <span className="Heading-span">Software Developer</span> 😎 with a passion for <span className="Heading-span">art</span> and <span className="Heading-span">STEM</span>. 🧐</h3>
            <p className="Description">
            With my unique blend of technical skills and creative interests, I strive to build innovative solutions and push the boundaries of what's possible. I'm always looking for new challenges and opportunities to learn and grow, and I welcome the opportunity to connect with others who share my interests. If you'd like to learn more about my work or collaborate on a project, feel free to connect with me. I'd love to hear from you!" 😄
            </p>
          </div>
        </div>
    </div>
  );
}

export default App;
