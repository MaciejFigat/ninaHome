import React from 'react'
import { ListRow } from '../../styles/homePanel.js'
import { motion } from 'framer-motion'

function Content({ description }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ListRow as={motion.div}>{description}</ListRow>
    </motion.div>
  )
}
export default Content

// <ListRow as={motion.div}>
//         <img src={picture} alt='ilustration' />
//       </ListRow>
//       <ListRow as={motion.div}>{title}</ListRow>
//  <CoverImage src={item.picture} alt='ilustration' />
