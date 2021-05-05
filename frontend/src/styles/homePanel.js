import styled from 'styled-components'
import { motion } from 'framer-motion'
// ListWrapper, ListItem, ListMarker, ListRow
export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  width: 300px;
  border-radius: 25px;
`
export const ListItem = styled(motion.li)`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: rgba(214, 214, 214, 0.5);
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
`
export const ListMarker = styled(motion.div)`
  width: 40px;
  height: 40px;
  background-color: #666;
  border-radius: 20px;
`
export const ListRow = styled(motion.div)`
  width: 100%;
  height: 8px;
  background-color: #999;
  border-radius: 10px;
  margin-top: 12px;
`
