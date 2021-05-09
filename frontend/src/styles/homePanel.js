import styled from 'styled-components'
import { motion } from 'framer-motion'
// ListWrapper, ListItem, ListMarker, ListRow
export const PictureListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  /* row-width: */
  width: 80vw;
  @media (max-width: 740px) {
    width: 95vw;
    flex-direction: column;
  }
`

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
export const PictureWrapper = styled(motion.div)`
  /* display: flex; */
  /* flex-direction: column; */
  background-color: var(--background2-main);
  padding: 20px;
  color: var(--text-main);
  /* width: 600px; */
  /* max-width: 88vw; */
  border-radius: 25px;
  width: 33vw;
  /* max-width: fit-content; */
`

export const ItemWrapper = styled(motion.div)`
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
`
export const ListItem = styled(motion.li)`
  padding: 20px;
  border-radius: 10px;
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
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 1.5rem;
`
export const Container = styled.div`
  height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
  width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
`

export const SvgContainer = styled.div`
  height: 'auto';
  width: 'auto';

  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${(props) => (props.fillColor ? `${props.fillColor}` : 'yellow')};
    height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
    width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
  }
`
