
// library imports
import { useLottie } from 'lottie-react';
import { motion } from 'framer-motion'
// local imports
// components
import { YMotionComponent } from '../../components';
// assets
import LiveAnimation from '../../assets/animations/live.json'
// styles
import '../../styles/screens/contact.styles.scss'

function ContactScreen() {
  const { View } = useLottie({
    animationData: LiveAnimation,
    loop: true,
    autoplay: true,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice', height: 70, width: 30 },
    speed: 0.1,
    duration: 3,
  })
  return (
    <motion.div className='contact__main-wrapper' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }}>
      <div className='contact__content'>
        <YMotionComponent className='contact__title' tag='h1' delay={0.1} >Contact</YMotionComponent>
        <YMotionComponent className='contact__subtitle' tag='h2' delay={0.35}>Let's talk about working together</YMotionComponent>
        <YMotionComponent className='contact__status' tag='div' delay={0.8}>
          <div className='contact__status__live-icon-wrapper'>
            {View}
            <div className={'contact__status__live-icon'} />
          </div>
          <h3 className='contact__status__text'>Available for new opportunities</h3>
        </YMotionComponent>
        <YMotionComponent className='contact__description' tag='div' delay={1.5}>
          <p>
            <br />
            <br />
            Collaboration and networking are important to me. I believe that connecting with others who share my interests can lead to great things. I am open to collaborating on projects, sharing ideas, and learning from others. I am excited by the prospect of working with like-minded people to create innovative and impactful projects.
            <br />
            <br />
            If you would like to learn more or explore the possibility of collaboration, please do not hesitate to reach out. I would be thrilled to hear from you and embark on a journey of innovation and creativity together!
          </p>
        </YMotionComponent>
      </div>
    </motion.div>
  );
}

export default ContactScreen;
