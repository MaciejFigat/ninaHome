import styled from 'styled-components'

export const ParallaxWrapper = styled.div`
  @media (max-width: 1190px) {
  }
  @media (max-width: 740px) {
  }
`

export const ParallaxContainer = styled.div`
  text-align: center;

  color: var(--text3-main);
  padding-top: 110px;

  @media (max-width: 1190px) {
    overflow: hidden;
    overflow-x: hidden;
    padding-top: 110px;

    padding-bottom: 110px;
    min-height: 50vh;
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
  /* @media (max-width: 1190px) {
    display: none;
  } */
`
export const ParallaxBoxTwo = styled.div`
  min-width: min-content;
  min-height: fit-content;
  padding: 20px;
  width: 150px;
  height: 150px;
  display: grid;

  place-items: center;

  background: #3b6fe0;
  box-shadow: inset 5px 5px 10px #223f80, inset -5px -5px 10px #549fff;
  /* background: #3b6fe0;
  box-shadow: inset 7px 7px 14px #325ebe, inset -7px -7px 14px #4480ff; */

  /* background: #e63946;
  box-shadow: inset 5px 5px 10px #c4303c, inset -5px -5px 10px #ff4251; */
  /* background: linear-gradient(145deg, #3564ca, #3f77f0);
  box-shadow: 20px 20px 60px #325ebe, -20px -20px 60px #4480ff; */
  /* background-color: ${(props) =>
    props.borderColor ? props.borderColor : 'cyan'}; */
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  font-size: 0.75rem;
  /* margin-bottom: 120px; */
  /* box-shadow: 3px 6px 5px 0px var(--background1-main); */

  @media (max-width: 740px) {
    width: 100px;
    height: 100px;
    font-size: 0.5rem;
    padding: 15px;
    /* margin-bottom: 60px; */
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
  /* @media (max-width: 1190px) {
    display: none;
  } */
`
