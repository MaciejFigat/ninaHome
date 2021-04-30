import React, { useState, useEffect } from 'react'
import Toast from '../components/Toast'
import {
  ResponsiveDiv,
  FormContainerDiv,
  ContactFormContainer,
  ContactFormStyled,
  ContactField,
  ContactFieldContent,
  MessageField,
  SendButtonWrapper,
  SendButton,
} from '../styles/contactForm.js'
import emailjs from 'emailjs-com'
import Loader from 'react-loader-spinner'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [toastVersion, setToastVersion] = useState('none')
  const [toastMessage, setToastMessage] = useState('')
  const [spinnerVisible, setSpinnerVisible] = useState(false)

  const messageResetHandler = (e) => {
    e.preventDefault()
    setToastVersion('reset')
    setToastMessage('Formularz zresetowany')
  }

  // EmailJS
  const EMAILJS_ID = process.env.REACT_APP_MY_EMAILJS_ID
  const SERVICE_ID = process.env.REACT_APP_MY_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_MY_TEMPLATE_ID

  const templateParams = {
    from_name: name,
    to_name: 'Maciej',
    message: formMessage,
    reply_to: email,
  }

  const emailJSSendHandler = (e) => {
    e.preventDefault()

    setSpinnerVisible(true)
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, EMAILJS_ID).then(
      function () {
        setToastVersion('success')
        setSpinnerVisible(false)
        setToastMessage('Wiadomość wysłana!')
      },
      function () {
        setToastVersion('failure')
        setSpinnerVisible(false)
        setToastMessage('Nie udało się wysłać wiadomości')
      }
    )
  }

  //toast
  const toastNone = (e) => {
    e.preventDefault()
    setToastVersion('none')
  }
  //

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastVersion('none')
    }, 3000)
    return () => clearTimeout(timer)
  }, [toastVersion])

  return (
    <FormContainerDiv>
      <div onClick={toastNone}>
        <Toast toastMessage={toastMessage} toastVersion={toastVersion} />
      </div>
      <ResponsiveDiv>
        {' '}
        <ContactFormContainer>
          <Loader
            type='ThreeDots'
            color='var(--text-main)'
            height={20}
            width={60}
            visible={spinnerVisible}
          />
          <ContactFormStyled>
            <ContactField>
              <label> Imię</label>
              <ContactFieldContent
                type='text'
                value={name}
                placeholder='Wpisz swoje imię'
                onChange={(e) => setName(e.target.value)}
              />
            </ContactField>
            <ContactField>
              <label> Email:</label>
              <ContactFieldContent
                type='email'
                value={email}
                placeholder='Wpisz email kontaktowy'
                onChange={(e) => setEmail(e.target.value)}
              />
            </ContactField>
            <ContactField>
              <label> Wiadomość:</label>
              <MessageField
                value={formMessage}
                placeholder='Wpisz wiadomość'
                onChange={(e) => setFormMessage(e.target.value)}
              ></MessageField>
            </ContactField>
            <SendButtonWrapper>
              <SendButton onClick={emailJSSendHandler}>Wyślij</SendButton>

              <SendButton onClick={messageResetHandler}>reset</SendButton>
            </SendButtonWrapper>
          </ContactFormStyled>{' '}
        </ContactFormContainer>
      </ResponsiveDiv>
    </FormContainerDiv>
  )
}
export default ContactForm
