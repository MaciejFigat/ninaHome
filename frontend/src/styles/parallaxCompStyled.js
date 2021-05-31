import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  text-align: center;
  /* min-height: 140vh; */
  /* min-height: fit-content; */
  /* height: 200vh; */
  /* background-color: var(--background4-main); */
  /* background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : 'none'}); */
  background-size: cover;
  background-position: top;
  color: var(--text3-main);
  padding-bottom: 110px;
  /* overflow: hidden;
  overflow-y: hidden; */

  @media (max-width: 1190px) {
    padding-top: 110px;
    overflow: hidden;
    overflow-x: hidden;
    padding-bottom: 0px;
    min-height: 140vh;
  }
  @media (max-width: 740px) {
    padding-top: 110px;
    padding-bottom: 0px;
  }
`
export const ParallaxBox = styled.div`
  display: grid;
  place-items: center;
  width: 150px;
  height: 150px;
  font-size: 1rem;
  fill: var(--background1-main);
  object-fit: contain;
  border-radius: 50%;
  background-color: ${(props) =>
    props.borderColor ? props.borderColor : 'cyan'};
  box-shadow: 3px 6px 5px 0px var(--background1-main);
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
  min-width: min-content;
  min-height: fit-content;
  padding: 20px;
  width: 150px;
  height: 150px;
  display: grid;
  place-items: center;
  background-color: ${(props) =>
    props.borderColor ? props.borderColor : 'cyan'};
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 1rem;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  @media (max-width: 740px) {
    font-size: 0.75rem;
    padding: 15px;
    margin-bottom: 60px;
  }
`
export const ParallaxBoxTwoContent = styled.div`
  width: 100%;
  background-color: none;
  /* border-radius: 50%; */
  margin-left: auto;
  margin-right: auto;
`
export const ParallaxBoxThree = styled.div`
  display: grid;
  color: var(--text4-main);
  place-items: center;
  width: 150px;
  height: 150px;
  font-size: 2rem;
  /* fill: var(--background1-main); */
  object-fit: contain;
  border-radius: 50%;
  background-color: ${(props) =>
    props.borderColor ? props.borderColor : 'cyan'};
  margin-left: auto;
  margin-right: auto;
  box-shadow: 3px 6px 5px 0px var(--background1-main);
  h4 {
    z-index: 3;
  }
  &:after {
    /* content: ${(props) => (props.title ? props.title : '')}; */

    content: '';
    font-weight: 600;
    font-size: 3rem;
    height: 100px;
    width: 80px;
    border: solid 25px
      ${(props) => (props.borderColor ? props.borderColor : 'cyan')};
    border-bottom: none;
    position: relative;
    top: -170px;
    border-radius: 35%;
  }
`
