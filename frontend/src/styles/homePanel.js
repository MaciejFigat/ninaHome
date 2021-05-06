import styled from 'styled-components'
import { motion } from 'framer-motion'
// ListWrapper, ListItem, ListMarker, ListRow
export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background-color: var(--background2-main);
  padding: 20px;
  color: var(--text-main);
  width: 600px;
  max-width: 88vw;
  border-radius: 25px;
`
export const ListItem = styled(motion.li)`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: var(--background1-main);
  cursor: pointer;
  &:last-child {
    margin-bottom: 0px;
  }
`
export const ListImage = styled.img`
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '50%')};
  object-fit: cover;
  /* display: none; */
  fill: var(--color1-secondary) !important;
  svg {
  }
  margin-right: 1rem;
  @media (max-width: 740px) {
    margin-right: 0.5rem;
  }
`

export const ListRow = styled(motion.div)`
  width: 90%;
  /* height: 20px; */
  padding: 0.75rem;
  font-weight: 600;
  min-height: fit-content;
  background-color: var(--background2-main);
  border-radius: 10px;
  margin-top: 12px;
`

export const ListTitleContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: left;
`
export const ListTitle = styled(motion.h2)`
  margin: 0;
  margin-left: 0.5rem;
  font-size: 1.5rem;
`
