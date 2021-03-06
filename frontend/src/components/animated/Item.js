import React, { useState } from 'react'
import {
  ListItem,
  ListTitle,
  ListTitleContainer,
  Container,
} from '../../styles/homePanel'

import { motion, AnimatePresence } from 'framer-motion'
import SvgIcon from '../SvgIcon'
import Content from './Content'

const Item = ({ picture, title, description, svgColor, Icon }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <ListItem
      as={motion.li}
      layout
      onClick={toggleOpen}
      initial={{ borderRadius: 15 }}
    >
      <ListTitleContainer as={motion.div}>
        <Container as={motion.div} layout>
          <SvgIcon Icon={Icon} fillColor={svgColor} />{' '}
        </Container>
        <ListTitle as={motion.h2} layout>
          {title}
        </ListTitle>
      </ListTitleContainer>
      <AnimatePresence>
        {isOpen && (
          <Content picture={picture} title={title} description={description} />
        )}
      </AnimatePresence>
    </ListItem>
  )
}
export default Item
// <Container as={motion.div} layout width={6} height={4}>
// <SvgIcon Icon={Icon} width={5.5} height={5} fillColor={svgColor} />{' '}
