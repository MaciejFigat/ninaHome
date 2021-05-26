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
    flex-direction: column-reverse;
    padding: 0;
  }
`

export const ListWrapper = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  /* background-color: var(--background2-main); */
  /* background-color: var(--background-blue2); */
  background-color: var(--background-tertiary5);
  padding: 20px;
  color: var(--text-main);
  width: 400px;
  max-width: 35vw;
  border-radius: 25px;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  /* justify-content: center; */
  height: fit-content;
  @media (max-width: 740px) {
    padding: 15px;
    margin-top: 10px;
    max-width: 90vw;
  }
`
export const PictureWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  color: var(--text-main);
  width: 600px;
  margin-right: 20px;
  @media (max-width: 740px) {
    margin-top: 10px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    width: 100%;
  }
  border-radius: 25px;
`

export const ListPicture = styled.img`
  width: ${(props) => (props.width ? props.width : '300px')};
  height: ${(props) => (props.height ? props.height : '20vh')};
  object-fit: cover;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  border-radius: 25px;
  @media (max-width: 740px) {
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
  /* background-color: var(--background1-main); */
  background-color: var(--background-tertiary1);
  /* background-color: var(--background-blue2); */
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
  text-align: left;
  width: 93%;
  padding: 1rem;
  line-height: 1.3;
  font-size: 1.2rem;
  font-weight: 600;
  min-height: fit-content;
  background-color: var(--background1-main);
  /* background-color: var(--background-tertiary1); */
  border-radius: 10px;
  margin-top: 12px;
  @media (max-width: 740px) {
    padding: 0.75rem;
    line-height: 1;
    font-size: 0.9rem;
  }
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
