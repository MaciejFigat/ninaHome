import React from 'react'
import ContactIcons from './ContactIcons'
import { NavHashLink } from 'react-router-hash-link'
import { NavContainer, NavList, ListItem } from '../styles/nav'

const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#home'
            activeClassName='selected'
            activeStyle={{ fontWeight: '700', color: 'lightcoral' }}
          >
            O mnie
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#fitness'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
          >
            Usługi
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#plans'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
          >
            Exe
          </NavHashLink>
        </ListItem>
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#training'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
          >
            Blog
          </NavHashLink>
        </ListItem>
        <ListItem> </ListItem>
        <ListItem>
          <ContactIcons />
        </ListItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
