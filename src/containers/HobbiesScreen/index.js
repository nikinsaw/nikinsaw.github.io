import './index.css';
import { Header } from '../../components';
import { headerListItems } from '../../data';
import map from 'lodash/map';
const images = [
  { key: 1, src: require('../../assets/gallery/BlackWidow.jpg') },
  { key: 2, src: require('../../assets/gallery/ColorfulCock.jpg') },
  { key: 3, src: require('../../assets/gallery/ColorfulLion.jpg') },
  { key: 4, src: require('../../assets/gallery/ColorfulParrot.jpg') },
  { key: 5, src: require('../../assets/gallery/InTheLightOfDarkness.jpg') },
  { key: 6, src: require('../../assets/gallery/TileOilPaint.jpg') },
]

const ImageItem = ({ src }) => {
  return (
    <div className='Image-wrapper'>
      <img className='Image-item' title="" alt="" src={src} style={{ opacity: 0.1 }} />
      <img className='Background-image-art' title="" alt="" src={src} />
    </div>
  )
}

function HobbiesScreen() {
  return (
    <div className="Hobbies-screen">
      <Header listItems={headerListItems} />
      <div className='Carousel'>
        {map(images, (image) => <ImageItem key={image.key} src={image.src} />)}
      </div>
    </div>
  );
}

export default HobbiesScreen;
