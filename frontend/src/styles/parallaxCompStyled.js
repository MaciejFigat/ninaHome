import styled from 'styled-components'

export const ParallaxContainer = styled.div`
  text-align: center;
  min-height: fit-content;
  /* height: 200vh; */
  /* background-color: var(--background4-main); */
  /* background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : 'none'}); */
  background-size: cover;
  background-position: top;
  color: var(--text3-main);
  padding-top: 110px;
  padding-bottom: 110px;
  overflow: hidden;
  overflow-y: hidden;
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
  h4 {
    z-index: 3;
  }
  &:after {
    /* content: ${(props) => (props.title ? props.title : '')}; */
    /* color: blueviolet !important; */
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

/* &:before {
  content: ${(props) => (props.title ? props.title : 'none')};
  background-color: red;
 color: var(--text4-main);
  position: relative;
  top: 40px;
  font-weight: 600;
  font-size: 3rem;
  border-radius: 35%;
} */
