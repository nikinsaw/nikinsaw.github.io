import { useCallback, useEffect, useMemo, useState } from 'react';
// library imports
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion';
import { map } from 'lodash';
// local imports
// components
import { Button, YMotionComponent, XMotionComponent } from '../../components';
// assets
import LiveAnimation from '../../assets/animations/live.json'
// data
import { work, socialIconNames, socialIcons } from '../../data';
// styles
import '../../styles/screens/home.styles.scss'
import { Link } from 'react-router-dom';



const SocialIcon = ({ name, theme, size, index, link }) => {
  const [isActive, setIsActive] = useState(false)

  const activeText = useMemo(() => isActive ? 'Active' : 'Inactive', [isActive])

  const onMouseOver = useCallback((i) => () => {
    setIsActive(i === index)
  }, [index])

  const onMouseLeave = useCallback((i) => () => {
    setIsActive(i !== index)
  }, [index])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <a key={index} href={link} onMouseOver={onMouseOver(index)} onMouseLeave={onMouseLeave(index)} className='Header-list-item'>
      <img className='home__social-icon' title="" alt={`${name}`} src={socialIcons[`${name + theme + activeText + size}`]} />
    </a>
  )
}
function HomeScreen() {

  const [isDarkTheme] = useState(true)
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

  const onClickCopyEmail = useCallback(() => {
    navigator.clipboard.writeText('nikitanarendrasawant@gmail.com')
  }, [])

  return (
    <motion.div className='home__main-wrapper' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }} >
      <div className='home__content'>
        <YMotionComponent className='home__profile-image-wrapper' tag='div' delay={0.05}>
          <img className='home__profile-image' src={require('../../assets/nikita.jpg')} alt='profile' />
        </YMotionComponent>
        <YMotionComponent className='home__full-name' tag='h1' delay={0.1} >Nikita Sawant</YMotionComponent>
        <YMotionComponent className='home__job-title' tag='h2' delay={0.35}>Lead Software Engineer at Persistent Systems</YMotionComponent>
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
        <YMotionComponent className='home__contact-email-buttons-wrapper' tag='div' delay={1.125} >
          <XMotionComponent className='home__contact-button-wrapper' tag='div' delay={1.125} startX={-50}>
            <Link to='/contact' className='home__contact-button-link' >
              <Button text='Contact me' colorClass='primary' icon={require('../../assets/icons/icons_70/icons8-envelope-50.png')} />
            </Link>
          </XMotionComponent>
          <p>or</p>
          <XMotionComponent className='home__email-button-wrapper' tag='div' delay={1.125} startX={50}>
            <Button text='Copy email' colorClass='secondary' icon={require('../../assets/icons/icons_70/icons8-copy-48.png')} onClick={onClickCopyEmail} />
          </XMotionComponent>
        </YMotionComponent>
        <YMotionComponent className='home__location' tag='h3' delay={1.2}> Mumbai, India </YMotionComponent>
        <YMotionComponent className='home__description' tag='div' delay={1.5}>
          <p>About</p>
          <p className='home__description__details' >
            I'm Nikita Sawant, a software developer based in Mumbai.
            <br />
            <br />
            With over 3.5 years of experience in building and maintaining mobile apps using React Native, I take pride in delivering applications that are user-friendly, efficient and visually appealing.
            <br />
            <br />
            My journey in IT isn’t a career choice; it’s my passion to use technology to transform lives, by creating apps that bring service at your fingertips. I firmly believe in the power of technology to make a difference in the world.
            <br />
            <br />
          </p>
          <p>Work</p>
          <div>
            {map(work, (item, index) => (
              <div key={index} className='home__work__image-container'>
                <h1 className='home__work__tagline'>  # {item.tagline}</h1>
                <Link to={`projects/${item.slug}`}>
                  <img className='home__work__image' src={item.image} alt={item.name} />
                </Link>
              </div>
            ))}
          </div>
        </YMotionComponent>
      </div>
    </motion.div>
  );
}

export default HomeScreen;
