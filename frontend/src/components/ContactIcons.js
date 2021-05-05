import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { IconsItem, IconsWrapper } from '../styles/contactIcons'
const ContactIcons = () => {
  return (
    <IconsWrapper>
      <IconsItem>
        <NavLink to='/contact' aria-label='contact'>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </NavLink>
      </IconsItem>
      <IconsItem>
        <a
          href='https://www.instagram.com/ninaolgakirylowicz/'
          aria-label='instagram'
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </IconsItem>
      <IconsItem>
        <a
          href='https://www.facebook.com/profile.php?id=100044161188998'
          aria-label='facebook'
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </IconsItem>
    </IconsWrapper>
  )
}

export default ContactIcons
