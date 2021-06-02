import React, { useRef, useState, useLayoutEffect } from 'react'
import {
  useViewportScroll,
  motion,
  useTransform,
  AnimateSharedLayout,
} from 'framer-motion'
import {
  ParallaxContainer,
  ParallaxBox,
  ParallaxBoxTwo,
  ParallaxBoxThree,
} from '../../styles/parallaxCompStyled'
import ParallaxComponentClick from './ParallaxComponentClick'

const ParalaxTextBubble = ({ title, kettleData, data }) => {
  const { scrollY } = useViewportScroll()
  const ref = useRef()
  const [offsetTop, setOffsetTop] = useState(0)
  const [showText, setShowText] = useState(false)

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
    <AnimateSharedLayout>
      <ParallaxContainer as={motion.div} ref={ref}>
        {title && (
          <ParallaxBoxTwo
            as={motion.div}
            layout
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ y: y5, x: 0 }}
            // borderColor={kettleData[1].color}
            onClick={() => {
              setShowText(!showText)
            }}
          >
            <h1>{title}</h1>
          </ParallaxBoxTwo>
        )}

        {showText === true && data && <ParallaxComponentClick data={data} />}
        {kettleData &&
          kettleData.map((example) => (
            <div key={example.id}>
              {example.title && (
                <ParallaxBoxThree
                  as={motion.div}
                  layout
                  style={{ y: y3, x: example.xPosition }}
                  borderColor={example.color}
                >
                  <h4>{example.title}</h4>
                </ParallaxBoxThree>
              )}
              {!example.title && example.yPosition === 1 && (
                <ParallaxBox
                  as={motion.div}
                  layout
                  style={{ y: y1, x: example.xPosition }}
                  borderColor={example.color}
                />
              )}
              {!example.title && example.yPosition === 2 && (
                <ParallaxBox
                  as={motion.div}
                  layout
                  style={{ y: y2, x: example.xPosition }}
                  borderColor={example.color}
                />
              )}
              {!example.title && example.yPosition === 3 && (
                <ParallaxBox
                  as={motion.div}
                  layout
                  style={{ y: y3, x: example.xPosition }}
                  borderColor={example.color}
                />
              )}
              {!example.title && example.yPosition === 4 && (
                <ParallaxBox
                  as={motion.div}
                  layout
                  style={{ y: y4, x: example.xPosition }}
                  borderColor={example.color}
                />
              )}
            </div>
          ))}
      </ParallaxContainer>
    </AnimateSharedLayout>
  )
}

export default ParalaxTextBubble
