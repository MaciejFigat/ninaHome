import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: grid;
  place-items: center;
  position: sticky;
  top: 0;
  height: fit-content;
  max-width: 100%;
  /* background: var(--background2-main); */
  background: var(--background-tertiary5);
  box-shadow: 2px 1px 5px 0px var(--background1-main);
  z-index: 22;
`
export const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  padding: 0;
`
export const ListItem = styled.li`
  margin-right: 1rem;
  font-size: 1.75rem;
  font-weight: 700;

  &:hover {
    color: red;
  }
  &:active {
    color: purple;
  }
  @media (max-width: 740px) {
    font-size: 1.1rem;
    margin-right: 0.25rem;
  }
`
