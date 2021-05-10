import React, { useState } from 'react'
import {
  ListWrapper,
  ItemWrapper,
  PictureWrapper,
  PictureListWrapper,
  ListPicture,
} from '../../styles/homePanel.js'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Item from './Item'
// import { CoverImage } from '../../styles/styled'
import Content from './Content'

const AnimatedPanel = ({ data, Icon }) => {
  const [panelNumber, setPanelNumber] = useState(0)

  return (
    <PictureListWrapper>
      <AnimateSharedLayout>
        <ListWrapper as={motion.ul} layout initial={{ borderRadius: 25 }}>
          {data.map((item) => (
            <ItemWrapper
              key={item.id}
              onClick={() => {
                setPanelNumber(item.id - 1)
              }}
            >
              <Item
                picture={item.picture}
                title={item.title}
                description={item.description}
                svgColor={item.color}
                Icon={Icon}
              />
            </ItemWrapper>
          ))}
        </ListWrapper>{' '}
        <PictureWrapper
          as={motion.div}
          layout
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
        >
          <ListPicture
            as={motion.img}
            width='40vw'
            // height='200px'
            height='40vh'
            // initial={{ borderRadius: 25 }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            drag
            dragConstraints={{
              top: 10,
              left: 10,
              right: 10,
              bottom: 10,
            }}
            // layout
            src={data[panelNumber].picture}
            alt='ilustration'
          />

          <Content description={data[panelNumber].description} />
        </PictureWrapper>
      </AnimateSharedLayout>
    </PictureListWrapper>
  )
}

export default AnimatedPanel
