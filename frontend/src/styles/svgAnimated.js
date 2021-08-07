import styled from 'styled-components'

export const SvgContainer = styled.div`
  width: 35vw;
  height: 30vh;
  min-width: 250px;
  display: flex;
  place-content: center;
  overflow: hidden;
  /* background: var(--background-tertiary3); */
  /* background: var(--background3-main); */
`
export const SvgItem = styled.svg`
  width: 96%;
  overflow: visible;
  stroke: var(--background4-main);
  stroke-width: 0.85;
  stroke-linejoin: round;
  stroke-linecap: round;
`
export const TitleCard = styled.div`
  padding: 3rem;
  color: var(--text4-main);
  margin: 1rem;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
`
export const TitleContainer = styled.div`
  font-size: 3rem;
  @media (max-width: 880px) {
    font-size: 2rem;
  }
`
export const DescriptionContainer = styled.div`
  font-size: 5rem;
  @media (max-width: 880px) {
    font-size: 3rem;
  }
`
export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`
