import React, { useRef, useState, useLayoutEffect } from 'react'
import { useViewportScroll, motion, useTransform } from 'framer-motion'
import {
  ParallaxContainer,
  ParallaxBox,
  ParallaxBoxTwo,
  ParallaxBoxThree,
} from '../../styles/parallaxCompStyled'

const ParalaxTextBubble = ({ title, kettleData }) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [offsetTop, setOffsetTop] = useState(0)

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
  const y4 = useTransform(scrollY, [offsetTop + 50, offsetTop + 150], [0, 10])
  const y5 = useTransform(
    scrollY,
    [offsetTop - 350, offsetTop + 50],
    [-100, 100]
  )

  return (
    <ParallaxContainer ref={ref}>
      <ParallaxBoxTwo
        as={motion.div}
        style={{ y: y5, x: 0 }}
        borderColor={kettleData[1].color}
      >
        <h1>{title}</h1>
      </ParallaxBoxTwo>
      {kettleData.map((example) => (
        <div key={example.id}>
          {example.title && (
            <ParallaxBoxThree
              as={motion.div}
              style={{ y: y1, x: 0 }}
              borderColor={example.color}
              title={example.title}
            />
          )}
          {example.yPosition === 1 && (
            <ParallaxBox
              as={motion.div}
              style={{ y: y1, x: example.xPosition }}
              borderColor={example.color}
            />
          )}
          {example.yPosition === 2 && (
            <ParallaxBox
              as={motion.div}
              style={{ y: y2, x: example.xPosition }}
              borderColor={example.color}
            />
          )}
          {example.yPosition === 3 && (
            <ParallaxBox
              as={motion.div}
              style={{ y: y3, x: example.xPosition }}
              borderColor={example.color}
            />
          )}
          {example.yPosition === 4 && (
            <ParallaxBox
              as={motion.div}
              style={{ y: y4, x: example.xPosition }}
              borderColor={example.color}
            />
          )}
        </div>
      ))}
    </ParallaxContainer>
  )
}

export default ParalaxTextBubble

//       <ParallaxBoxTwo
//         as={motion.div}
//         style={{ y: y1, x: -100, background: 'brown' }}
//       >
//         <h1>{title}</h1>
//       </ParallaxBoxTwo>
//       <ParallaxBox
//         as={motion.div}
//         style={{ y: y2, x: 100 }}
//         borderColor='pink'
//       ></ParallaxBox>

//       <ParallaxBox
//         as={motion.div}
//         style={{ y: y4, x: -150 }}
//         borderColor='green'
//       ></ParallaxBox>
//       <ParallaxBox
//         as={motion.div}
//         style={{ y: y2, x: 350 }}
//         borderColor='darkblue'
//       ></ParallaxBox>

//       <ParallaxBoxThree
//         as={motion.div}
//         style={{ y: y3, x: 0 }}
//         borderColor='silver'
//       >
//         HELL
//       </ParallaxBoxThree>
