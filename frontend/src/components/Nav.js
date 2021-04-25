import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import { NavContainer, NavList, ListItem } from '../styles/nav'
// import { useLocation } from 'react-router-dom'
const Nav = () => {
  // const location = useLocation()
  return (
    <NavContainer>
      <NavList>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/#home'
            activeClassName='selected'
            activeStyle={{ fontWeight: '700', color: 'white' }}
          >
            Home
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/#fitness'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'white' }}
          >
            Fitness
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/#plans'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'white' }}
          >
            Plany
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/#training'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'white' }}
          >
            Treningi
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/#ending'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'white' }}
          >
            Ćwiczenia
          </NavHashLink>
        </ListItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
