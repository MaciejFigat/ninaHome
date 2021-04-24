import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  /* border: var(--color3-main); */
  border: pink;
  border-radius: 5px;
`
export const WrapperCentringDiv = styled.div`
  display: grid;
  place-items: center;
`
export const CardWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 1.5rem 0rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25ch, 1fr));
  grid-gap: 1.5rem;
  @media (min-width: 1100px) and (max-width: 1439px) {
    max-width: 80vw;
  }
  @media (min-width: 1440px) and (max-width: 1679px) {
    max-width: 70vw;
  }
  @media (min-width: 1680px) {
    max-width: 60vw;
  }
`
export const CardProper = styled.li`
  display: grid;
  place-items: center;
  /* background: ${(props) => props.theme.linearGradientSecondary}; */
  border-radius: 0.5rem;
  font-family: 'Roboto Slab', serif;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;

  min-height: 100%;

  &:hover {
    @media (min-width: 740px) {
      /* box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color4-shadow); */
      box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem blueviolet;
    }
  }
`
