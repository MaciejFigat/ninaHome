import styled from 'styled-components'

export const SectionDiv = styled.div`
  background: url(${(props) =>
      props.backgroundImage ? props.backgroundImage : 'none'})
    no-repeat fixed;
  background-size: 40% auto;
  background-position: center 3rem;
  background-color: var(--background4-main);
  @media (max-width: 740px) {
    background-size: 100% auto;
    background-position: center 50px;
  }
`
