import styled from 'styled-components'

export const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '80%')};
  height: ${(props) => (props.height ? props.height : '80%')};
  object-fit: cover;
  padding-bottom: 1rem;
  /* margin-bottom: 3rem; */
  /* overflow: hidden; */
  /* object-position: 0px 5%; */
  border-radius: 5px;
`

export const CoverImage = styled.img`
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '50%')};
  object-fit: cover;
  object-position: 0px 5%;
  border-radius: 5px;
  @media (max-width: 740px) {
    width: 100%;
  }
`

export const LogoImage = styled.img`
  width: ${(props) => (props.width ? props.width : '50%')};
  height: ${(props) => (props.height ? props.height : '50%')};
  object-fit: cover;
  fill: var(--text-main) !important;
  margin-right: 1rem;
  @media (max-width: 740px) {
    margin-right: 0.5rem;
  }
`
export const WrapperCentringDiv = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--background1-main);
  min-height: 100vh;
  color: var(--text-main);
`
export const CardWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 1.5rem 0rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(35ch, 1fr));
  grid-gap: 1.5rem;
  padding-bottom: 1rem;
  @media (max-width: 740px) {
    margin: 0.5rem 0.5rem 0rem 0.5rem;
    max-width: 90vw;
  }
  @media (min-width: 1100px) and (max-width: 1439px) {
    max-width: 90vw;
  }
  @media (min-width: 1440px) and (max-width: 1679px) {
    max-width: 75vw;
  }
  @media (min-width: 1680px) {
    max-width: 65vw;
  }
`
export const CardProper = styled.li`
  display: grid;
  place-items: center;
  background: var(--background2-main);
  border-radius: 5px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: solid 1px var(--border-main);
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  min-height: fit-content;

  margin-bottom: 1rem;
  @media (max-width: 770px) {
    /* min-height: 100%; */
    /* overflow: visible; */
  }

  &:hover {
    @media (min-width: 740px) {
      box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem var(--color1-shadow);
    }
  }
`
export const CardH3 = styled.h3`
  margin: 1rem 1rem 1rem 2rem;
  font-size: 1.55rem;
  min-height: fit-content;
  @media (max-width: 770px) {
    font-size: 1.25rem;
  }
`
export const CardH2 = styled.h2`
  margin: 2rem 1rem 1rem 2rem;
  font-size: 2.25rem;
  @media (max-width: 770px) {
    font-size: 2rem;
  }
`
export const CardWrapperLeft = styled.div`
  display: grid;
  place-items: left;
`
export const CardP = styled.p`
  margin-bottom: 1rem;
  margin-left: 3rem;
  margin-right: 1rem;
  min-width: fit-content;
  font-weight: 500;
  font-size: 1.15rem;
  border-bottom: solid 1.5px var(--color2-main);
  @media (max-width: 770px) {
    margin-left: 0.5rem;
    margin-bottom: 0.5rem;
  }
`
