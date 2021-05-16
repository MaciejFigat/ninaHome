import React, { useRef, useState, useLayoutEffect } from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
import {
  ParallaxContainer,
  ParallaxBox,
  ParallaxBoxTwo,
  ParallaxBoxThree,
  //   ParallaxBoxTwoContent,
} from '../../styles/parallaxCompStyled'

// import { fitnessData } from '../../data/fitness'
// style={{ scaleX: scrollYProgress }}
const ParalaxTextBubble = ({ title }) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [offsetTop, setOffsetTop] = useState(0)
  // const { scrollY, scrollYProgress } = useViewportScroll()

  useLayoutEffect(() => {
    if (!ref.current) return null
    setOffsetTop(ref.current.offsetTop)
  }, [ref])

  const y1 = useTransform(scrollY, [offsetTop - 150, offsetTop + 150], [0, 200])
  const y2 = useTransform(
    scrollY,
    [offsetTop - 100, offsetTop + 100],
    [0, -200]
  )
  const y3 = useTransform(
    scrollY,
    [offsetTop - 150, offsetTop + 150],
    [-200, 100]
  )
  const y4 = useTransform(
    scrollY,
    [offsetTop - 150, offsetTop + 150],
    [-100, 200]
  )

  return (
    <ParallaxContainer ref={ref}>
      <ParallaxBox
        as={motion.div}
        style={{ y: y1, x: -150 }}
        borderColor='brown'
      ></ParallaxBox>
      <ParallaxBoxTwo
        as={motion.div}
        style={{ y: y1, x: 10, background: 'brown' }}
      >
        <h1>{title}</h1>
      </ParallaxBoxTwo>
      <ParallaxBox
        as={motion.div}
        style={{ y: y2, x: 50 }}
        borderColor='pink'
      ></ParallaxBox>
      <ParallaxBox
        as={motion.div}
        style={{ y: y3, x: -50 }}
        borderColor='gold'
      ></ParallaxBox>
      <ParallaxBox
        as={motion.div}
        style={{ y: y4, x: -150 }}
        borderColor='green'
      ></ParallaxBox>
      <ParallaxBox
        as={motion.div}
        style={{ y: y3, x: 50 }}
        borderColor='darkblue'
      ></ParallaxBox>

      <div style={{ position: 'fixed', top: 0, left: 0 }}> </div>
      <ParallaxBoxThree
        as={motion.div}
        style={{ y: y3, x: 0, background: 'white' }}
      ></ParallaxBoxThree>
    </ParallaxContainer>
  )
}

export default ParalaxTextBubble
