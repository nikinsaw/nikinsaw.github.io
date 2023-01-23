import './index.css';
import  BackgroundImageArt from '../../assets/art.png'
import { Header } from '../../components';
import { headerListItems } from '../../data';

function ProjectsScreen() {
  return (
    <div className="Projects-screen">
        <Header listItems={headerListItems} />
        <div>
          <img className='Background-image-art' title="" alt="" src={BackgroundImageArt}/>
        </div>
    </div>
  );
}

export default ProjectsScreen;
