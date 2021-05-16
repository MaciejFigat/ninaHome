import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  text-align: center;
  min-height: 100vh;
  height: fit-content;
  background-color: var(--background4-main);
  color: var(--text3-main);
  padding-top: 220px;
`
export const ParallaxBox = styled.div`
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  font-size: 1rem;
  /* min-width: fit-content; */
  /* min-height: fit-content; */
  fill: var(--background1-main);
  object-fit: contain;
  border-radius: 50%;

  background-color: ${(props) =>
    props.borderColor ? props.borderColor : 'cyan'};

  margin-left: auto;
  margin-right: auto;
  &:after {
    content: '';
    height: 100px;
    width: 80px;
    border: solid 25px
      ${(props) => (props.borderColor ? props.borderColor : 'cyan')};
    position: relative;
    top: -50px;
    border-radius: 35%;
  }
`
export const ParallaxBoxTwo = styled.div`
  width: 150px;
  height: 150px;
  display: grid;
  place-items: center;
  background-color: #fff;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`
export const ParallaxBoxTwoContent = styled.div`
  width: 100%;
  /* height: 200px; */
  background-color: none;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`
export const ParallaxBoxThree = styled.div`
  width: 100%;

  margin-left: auto;
  margin-right: auto;
`
