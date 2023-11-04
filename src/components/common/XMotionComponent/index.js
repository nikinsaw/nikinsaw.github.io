import { motion } from 'framer-motion';

const componentMap = {
  div: motion.div,
  span: motion.span,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  // Add other HTML tags as needed

};

const XMotionComponent = ({ tag = 'div', delay, children, startX = -500, endX = 0, ...rest }) => {
  const MotionComponent = componentMap[tag];

  return (
    <MotionComponent
      initial={{ x: startX, opacity: 0 }}
      animate={{ x: endX, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        type: 'spring',
        bounce: 0.2, duration: 1.5, delay, ease: 'easeIn'
      }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}

export default XMotionComponent