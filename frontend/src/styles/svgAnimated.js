import styled from 'styled-components'

export const SvgContainer = styled.div`
  /* width: 150px; */
  /* height: 150px; */
  width: 30vw;
  height: 30vh;
  min-width: 250px;
  display: flex;
  place-content: center;
  overflow: hidden;
  /* background: var(--background-tertiary5); */
  /* background: var(--background3-main); */
`
export const SvgItem = styled.svg`
  width: 96%;
  overflow: visible;
  stroke: var(--background-tertiary5);
  stroke-width: 0.8;
  stroke-linejoin: round;
  stroke-linecap: round;
`
// export const Container = styled.div``
export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`
