import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ListPicture } from '../../styles/homePanel.js'
const ImageAnimated = ({ src, width, height, id }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <ListPicture
        as={motion.img}
        width={width}
        height={height}
        src={src}
        alt='ilustration'
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
    </AnimatePresence>
  )
}

export default ImageAnimated
