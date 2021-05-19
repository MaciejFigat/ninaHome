import styled from 'styled-components'
import { motion } from 'framer-motion'
// ListWrapper, ListItem, ListMarker, ListRow
export const PictureListWrapper = styled(motion.ul)`
  height: 100vh;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-around;
  @media (max-width: 740px) {
    height: fit-content;
    flex-direction: column;
    padding: 0;
  }
`

export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  background-color: var(--background2-main);
  padding: 20px;
  color: var(--text-main);
  width: 400px;
  max-width: 35vw;
  border-radius: 25px;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  /* justify-content: center; */
  height: fit-content;
  @media (max-width: 740px) {
    margin-top: 10px;
    max-width: 100vw;
    width: 320px;
  }
`
export const PictureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  /* background-color: var(--background2-main); */
  /* padding: 20px; */
  color: var(--text-main);
  width: 600px;
  /* align-items: center; */
  /* justify-content: center; */
  /* margin-left: 20px; */
  margin-right: 20px;
  @media (max-width: 740px) {
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    width: 100%;
  }

  /* max-width: 88vw; */
  border-radius: 25px;
  /* max-width: fit-content; */
`

export const ListPicture = styled.img`
  width: ${(props) => (props.width ? props.width : '300px')};
  height: ${(props) => (props.height ? props.height : '20vh')};
  object-fit: cover;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  /* object-fit: contain; */
  /* padding-bottom: 1rem; */
  border-radius: 25px;
  @media (max-width: 740px) {
    object-fit: contain;
    width: 100%;
    max-height: 30vh;
    box-shadow: none;
  }
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
  width: 93%;
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
  @media (max-width: 740px) {
    max-height: 2.5rem;
  }
`
export const ListTitle = styled(motion.h2)`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 0;
  margin-left: 0.5rem;
  font-size: 1.5rem;
  @media (max-width: 740px) {
    font-size: 1.1rem;
    margin-left: 0rem;
  }
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
  @media (max-width: 740px) {
    max-height: 3.5rem;
    max-width: 3.5rem;
  }

  & svg {
    fill: ${(props) => (props.fillColor ? `${props.fillColor}` : 'yellow')};
    height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
    width: ${(props) => (props.width ? `${props.width}rem` : '100%')};
    @media (max-width: 740px) {
      max-height: 3.5rem;
      max-width: 3.5rem;
    }
  }
`
