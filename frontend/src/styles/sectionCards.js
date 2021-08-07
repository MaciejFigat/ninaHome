import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  @media (max-width: 880px) {
    flex-direction: column;
  }
`
export const Card = styled.div`
  background: var(--background-tertiary3);
  height: 600px;
  width: 400px;
  padding: 2rem;
  margin: 1rem;
  border-radius: 0.25rem;
  @media (max-width: 880px) {
    max-width: 70vw;
  }
`
