import React from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ParallaxContainer,
  ParallaxBox,
  ParallaxBoxTwo,
} from '../../styles/parallaxCompStyled'
import background1 from '../../assets/backgrounds/background1.jpg'
import AnimatedPanel from './AnimatedPanel'
import { fitnessData } from '../../data/fitness'
// import { offerData } from '../../data/offer'
// import { plansData } from '../../data/plans'
import { ReactComponent as Parrots } from '../../assets/parrots.svg'
const ParalaxComponent = () => {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 200])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50,
    },
  }
  return (
    <ParallaxContainer>
      <ParallaxBox
        background={background1}
        as={motion.div}
        style={{ y: y1, x: -50 }}
      ></ParallaxBox>

      <ParallaxBox
        as={motion.div}
        style={{ y: y2, x: 50, background: 'salmon' }}
      ></ParallaxBox>

      <div style={{ height: 500 }} />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {' '}
        {'is in view? ' + inView}
      </div>
      <AnimatedPanel data={fitnessData} Icon={Parrots} />
      <ParallaxBox
        background={background1}
        as={motion.div}
        style={{ y: y1, x: -50 }}
      ></ParallaxBox>
      <ParallaxBoxTwo
        as={motion.div}
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        ref={ref}
      ></ParallaxBoxTwo>
      <div style={{ height: 500 }} />
      <div style={{ position: 'fixed', top: 0, left: 0 }}>
        {' '}
        {'is in view? ' + inView}
      </div>
      <AnimatedPanel data={fitnessData} Icon={Parrots} />

      <ParallaxBoxTwo
        as={motion.div}
        animate={!inView ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        ref={ref}
      ></ParallaxBoxTwo>
    </ParallaxContainer>
  )
}

export default ParalaxComponent
