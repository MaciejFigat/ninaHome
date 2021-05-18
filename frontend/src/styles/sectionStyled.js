import styled from 'styled-components'

export const SectionDiv = styled.div`
  background-image: url(${(props) =>
    props.backgroundImage ? props.backgroundImage : 'none'});
  /* background-size: cover; */
  background-size: 100% auto;
  background-color: var(--background4-main);
  fill: green !important;
  color: green !important;
  stroke: green !important;
`
