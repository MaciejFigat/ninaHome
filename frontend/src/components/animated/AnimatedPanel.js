import React, { useState } from 'react'
import {
  ListWrapper,
  ItemWrapper,
  PictureWrapper,
  PictureListWrapper,
} from '../../styles/homePanel.js'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Item from './Item'
import { CoverImage } from '../../styles/styled'

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
      </AnimateSharedLayout>
      <PictureWrapper
        as={motion.div}
        layout
        // initial={{ borderRadius: 25 }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.5 }}
      >
        <CoverImage
          as={motion.img}
          width='100%'
          height='100%'
          initial={{ borderRadius: 25 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          layout
          src={data[panelNumber].picture}
          alt='ilustration'
        />
      </PictureWrapper>
    </PictureListWrapper>
  )
}

export default AnimatedPanel
