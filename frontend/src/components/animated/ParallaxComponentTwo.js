import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ParallaxContainer,
  ParallaxBoxTwoContent,
} from '../../styles/parallaxCompStyled'
import Content from './Content'
import ImageAnimated from './ImageAnimated'
import background1 from '../../assets/backgrounds/background1.jpg'

const ParalaxComponentTwo = ({ description }) => {
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 70,
    },
  }
  return (
    <ParallaxContainer>
      <ParallaxBoxTwoContent
        as={motion.div}
        variants={variants}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <AnimatePresence>
          <Content key={123123} description={description} />
          <ImageAnimated key={33232} src={background1} />
        </AnimatePresence>
      </ParallaxBoxTwoContent>
    </ParallaxContainer>
  )
}

export default ParalaxComponentTwo
