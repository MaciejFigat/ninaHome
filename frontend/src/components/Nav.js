import React from 'react'
import { HashLink } from 'react-router-hash-link'
// import '../styles/nav.scss'
import { NavContainer, NavList, ListItem } from '../styles/nav'
const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <ListItem>
          {' '}
          <HashLink smooth to='/#home'>
            Home
          </HashLink>
        </ListItem>
        <ListItem>
          {' '}
          <HashLink smooth to='/#fitness'>
            Fitness
          </HashLink>
        </ListItem>
        <ListItem>
          {' '}
          <HashLink smooth to='/#plans'>
            Plany
          </HashLink>
        </ListItem>
        <ListItem>
          {' '}
          <HashLink smooth to='/#training'>
            Treningi
          </HashLink>
        </ListItem>
        <ListItem>
          {' '}
          <HashLink smooth to='/#ending'>
            Ćwiczenia
          </HashLink>
        </ListItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
