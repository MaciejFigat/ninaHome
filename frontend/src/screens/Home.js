import React from 'react'
import nina1 from '../assets/nina1.jpg'
import { NavLink } from 'react-router-dom'
import {
  WrapperCentringDiv,
  CardWrapper,
  CardProper,
  CoverImage,
  CardH3,
  CardH2,
} from '../styles/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { fitnessData } from '../data/fitness'
import { plansData } from '../data/plans'
import { offerData } from '../data/offer'
import Panel from '../components/Panel'

const Home = () => {
  return (
    <>
      <WrapperCentringDiv id='home'>
        {' '}
        <CardWrapper>
          <CardProper>
            <CoverImage
              width='100%'
              height='100%'
              src={nina1}
              alt='yoga girl'
            />
          </CardProper>
          <CardH2>Trener medyczny certyfikowany przez Blackroll</CardH2>
          <CardProper>
            <CardH3>
              Specjalizuję się w wielopłaszczyznowych treningach oraz
              eliminowaniu słabych ogniw układu ruchu.
            </CardH3>
          </CardProper>

          <CardH2>Doświadczenie i&nbsp;szkolenia</CardH2>

          <CardProper>
            <CoverImage
              width='100%'
              height='100%'
              src={nina1}
              alt='yoga girl'
            />
          </CardProper>
          <CardProper>
            <CardH3>
              Pracuję w TI HealthClub oraz studiuję Fizjoterapią na warszawskim
              AWF.
            </CardH3>
          </CardProper>
          <CardProper>
            <CardH3>
              <NavLink to='/contact' aria-label='contact'>
                <FontAwesomeIcon icon={faEnvelopeSquare} />
              </NavLink>
            </CardH3>
          </CardProper>
          <CardProper>
            <CardH3>
              {' '}
              <a
                href='https://www.instagram.com/ninaolgakirylowicz/'
                aria-label='instagram'
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </CardH3>
          </CardProper>
          <CardProper>
            <CardH3>
              <a
                href='https://www.facebook.com/profile.php?id=100044161188998'
                aria-label='facebook'
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>{' '}
            </CardH3>
          </CardProper>
        </CardWrapper>
        <CardWrapper></CardWrapper>
      </WrapperCentringDiv>
      <Panel
        id='fitness'
        data={fitnessData}
        title='Fitness'
        subtitle='Zdrowe podejście do wysiłku sportowego'
      />
      <Panel
        id='plans'
        data={offerData}
        title='Plany treningowe'
        subtitle='Indywidualne podejście'
      />
      <Panel
        id='training'
        data={plansData}
        title='Periodyzacja treningowa'
        subtitle='Różnicowanie natężenia wysiłku fizycznego'
      />
      <Panel
        id='ending'
        data={fitnessData}
        title='Przekrojowe podejście'
        subtitle='Jestem trenerem medycznym i wiem najlepiej.'
      />
    </>
  )
}

export default Home
