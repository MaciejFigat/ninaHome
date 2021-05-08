import React from 'react'
import { ListWrapper } from '../../styles/homePanel.js'
import { motion, AnimateSharedLayout } from 'framer-motion'
import Item from './Item'

const AnimatedPanel = ({ data, Icon }) => {
  return (
    <AnimateSharedLayout>
      <ListWrapper as={motion.ul} layout initial={{ borderRadius: 25 }}>
        {data.map((item) => (
          <Item
            key={item.id}
            picture={item.picture}
            title={item.title}
            description={item.description}
            svgColor={item.color}
            Icon={Icon}
          />
        ))}
      </ListWrapper>{' '}
    </AnimateSharedLayout>
  )
}

export default AnimatedPanel
