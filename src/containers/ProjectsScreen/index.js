import './index.css';
import  BackgroundImageReact from '../../assets/react.png'
import  BackgroundImageDjango from '../../assets/django.png'

function ProjectsScreen() {
  return (
    <div className="Projects-screen">
      <body>
        <div>
          <img className='Background-image-react' title="" alt="" src={BackgroundImageReact}/>
          <img className='Background-image-django' title="" alt="" src={BackgroundImageDjango}/>
        </div>
      </body>
    </div>
  );
}

export default ProjectsScreen;
