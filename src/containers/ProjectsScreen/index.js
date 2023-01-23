import './index.css';
import  BackgroundImageReact from '../../assets/react.png'
import  BackgroundImageDjango from '../../assets/django.png'
import { Header } from '../../components';
import { headerListItems } from '../../data';

function ProjectsScreen() {
  return (
    <div className="Projects-screen">
      <Header listItems={headerListItems} />
      <div>
        <img className='Background-image-react' title="" alt="" src={BackgroundImageReact}/>
        <img className='Background-image-django' title="" alt="" src={BackgroundImageDjango}/>
      </div>
    </div>
  );
}

export default ProjectsScreen;
