import { YMotionComponent } from '../../components';
import '../../styles/screens/home.styles.scss'
import { useLottie } from 'lottie-react';
import LiveAnimation from '../../assets/animations/live.json'
import { socialIconNames, socialIcons } from '../../data';
import { map } from 'lodash';
import { useCallback, useMemo, useState } from 'react';

const work = [
  {
    name: 'Petzzing',
    tagline: 'Rebuilding Petzzing App',
    link: 'https://petzzing.com/',
    image: require('../../assets/work/petzzing.png')
  },

  {
    name: 'Petzzing Partner',
    tagline: 'New partner app for Petzzing',
    link: 'https://petzzing.com/',
    image: require('../../assets/work/petzzing-partner.png')
  },

  {
    name: 'Whiskey Shelf',
    tagline: 'Building the Whiskey Shelf App',
    link: 'https://petzzing.com/',
    image: require('../../assets/work/whiskey-shelf.png')
  },
]


const SocialIcon = ({ name, theme, size, index, link }) => {
  const [isActive, setIsActive] = useState(false)

  const activeText = useMemo(() => isActive ? 'Active' : 'Inactive', [isActive])
  const onFocus = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  const onBlur = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  return (
    <a key={index} href={link} className='Header-list-item'>
      <img className='home__social-icon' title="" alt="blah" src={socialIcons[`${name + theme + activeText + size}`]} />
    </a>
  )
}
function HomeScreen() {

  const [isDarkTheme, setIsDarkTheme] = useState(true)
  const theme = useMemo(() => isDarkTheme ? 'DarkBG' : 'LightBG', [isDarkTheme])
  const size = useMemo(() => '50', [])
  const { View } = useLottie({
    animationData: LiveAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice', height: 70, width: 30 },
    speed: 0.1,
    duration: 3,
  })
  return (
    <div className='home__main-wrapper' >
      <div className='home__content'>
        <YMotionComponent className='home__profile-image-wrapper' tag='div' delay={0.05}>
          <img className='home__profile-image' src={require('../../assets/nikita.jpg')} alt='profile' />
        </YMotionComponent>
        <YMotionComponent className='home__full-name' tag='h1' delay={0.1} >Nikita Sawant</YMotionComponent>
        <YMotionComponent className='home__job-title' tag='h2' delay={0.35}>Software Developer at Petzzing</YMotionComponent>
        <YMotionComponent className='home__status' tag='div' delay={0.8}>
          <div className='home__status__live-icon-wrapper'>
            <>{View}</>
            <div className={'home__status__live-icon'} />
          </div>
          <h3 className='home__status__text'>Available for new opportunities</h3>
        </YMotionComponent>
        <YMotionComponent className='home__social-icons' tag='div' delay={1.1}>
          {map(socialIconNames, (item, index) => {
            return (
              <SocialIcon
                key={index}
                index={index}
                size={size}
                theme={theme} {...item}
              />
            )
          }
          )}
        </YMotionComponent>
        <YMotionComponent className='home__location' tag='h3' delay={1.2}> Mumbai, India </YMotionComponent>
        <YMotionComponent className='home__description' tag='div' delay={1.5}>
          <p>About</p>
          <p>
            I'm Nikita Sawant, a software developer based in Mumbai.
            <br />
            <br />
            With over 3 years of experience in building and maintaining mobile apps using React Native, I take pride in delivering applications that are user-friendly, efficient and visually appealing.
            <br />
            <br />
            My journey in IT isn’t a career choice; it’s my passion to use technology to transform lives, by creating apps that bring service at your fingertips. I firmly believe in the power of technology to make a difference in the world.
            <br />
            <br />
          </p>

          {/* <p>Skills</p> */}

          <p>Work</p>
          <div>
            {map(work, (item, index) => (
              <div key={index} className='home__work__image-container'>
                <h1 className='home__work__tagline'>  # {item.tagline}</h1>
                <a href={item.link} target='_blank' rel="noreferrer">
                  <img className='home__work__image' src={item.image} alt={item.name} />
                </a>
              </div>
            ))}
          </div>
        </YMotionComponent>
      </div>
    </div>
  );
}

export default HomeScreen;
