import React from 'react'
import { motion } from 'framer-motion'

import {
  ParallaxContainer,
  ParallaxBoxTwoContent,
} from '../../styles/parallaxCompStyled'
import AnimatedPanel from './AnimatedPanel'

import { ReactComponent as Parrots } from '../../assets/parrots.svg'

const ParalaxComponentClick = ({ data, firstPicture }) => {
  return (
    <ParallaxContainer>
      <ParallaxBoxTwoContent as={motion.div}>
        {' '}
        <AnimatedPanel data={data} Icon={Parrots} firstPicture={firstPicture} />
      </ParallaxBoxTwoContent>
    </ParallaxContainer>
  )
}

export default ParalaxComponentClick
