import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: grid;
  place-items: center;
  position: sticky;
  top: 0;
  height: fit-content;
  /* padding: 0rem 0 1.5rem; */
  max-width: 100%;
  background: var(--background2-main);
  /* padding-bottom: 1rem; */
  z-index: 22;
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`
export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.5rem;
  /* font-family: 'Roboto Slab', serif; */
  font-weight: 700;
  @media (max-width: 740px) {
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }
`
