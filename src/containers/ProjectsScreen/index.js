import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { work } from "../../data";
import { map } from "lodash";
import '../../styles/screens/projects.styles.scss'
import { YMotionComponent } from "../../components";
import { motion } from "framer-motion";

const ProjectsScreen = () => {
  const { slug } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <motion.div className='project' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 20 }} >
      <YMotionComponent className='project__content' tag='div' delay={0.05}>
        {map(work, (item, index) => item.slug === slug &&
          <>
            <img className='project__image' src={item.image} alt="" />
            <h1 className='project__title' ># {item.tagline}</h1>
            <p className='project__description'>{item.description}</p>
          </>
        )}
      </YMotionComponent>
    </motion.div>
  );
}

export default ProjectsScreen;