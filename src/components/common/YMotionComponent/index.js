import { motion } from 'framer-motion';

const componentMap = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  div: motion.div,
  img: motion.img,
  span: motion.span,
  // Add other HTML tags as needed

};

const YMotionComponent = ({ tag = 'div', delay, children, ...rest }) => {
  const MotionComponent = componentMap[tag];

  return ((tag === 'img')
    ? <MotionComponent
      exit={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 30, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.8, delay, ease: 'easeIn' }}
      {...rest} />
    : <MotionComponent
      exit={{ opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 20, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.1, duration: 0.8, delay, ease: 'easeIn' }}
      {...rest} >
      {children}
    </MotionComponent >)
}

export default YMotionComponent