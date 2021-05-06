import React from 'react'
import ContactIcons from '../components/ContactIcons'
import { NavHashLink } from 'react-router-hash-link'
import { NavContainer, NavList, ListItem } from '../styles/nav'
import { LogoImage } from '../styles/styled'
import parrots from '../assets/parrots.svg'
const Nav = () => {
  return (
    <NavContainer>
      <NavList>
        <LogoImage
          src={parrots}
          width='8%'
          height='3%'
          // style={{ fill: '#236677' }}
        />

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
            Ćwiczenia
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
        <ListItem>
          {' '}
          <NavHashLink
            smooth
            to='/home/#ending'
            activeClassName='selected'
            activeStyle={{ fontWeight: 'bold', color: 'lightcoral' }}
          >
            Kontakt
          </NavHashLink>
        </ListItem>
        <ListItem>
          <ContactIcons />
        </ListItem>
      </NavList>
    </NavContainer>
  )
}

export default Nav
