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
  /* background: rgba(255, 255, 255, 0.2); */
  border-radius: 30px;
`
export const SvgItem = styled.svg`
  width: 56%;
  overflow: visible;
  stroke: #febe10;
  stroke-width: 1;
  stroke-linejoin: round;
  stroke-linecap: round;
`
// export const Container = styled.div``
export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  /* padding-top: 110px; */
`
