import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ParallaxContainer,
  ParallaxBoxTwoContent,
} from '../../styles/parallaxCompStyled'
import AnimatedPanel from './AnimatedPanel'

import { ReactComponent as Parrots } from '../../assets/parrots.svg'

const ParalaxComponent = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    trackVisibility: true,
    delay: 300,
  })
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 60,
    },
  }
  return (
    <ParallaxContainer>
      <ParallaxBoxTwoContent
        as={motion.div}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        ref={ref}
      >
        {' '}
        <AnimatedPanel data={data} Icon={Parrots} />
      </ParallaxBoxTwoContent>
    </ParallaxContainer>
  )
}

export default ParalaxComponent
