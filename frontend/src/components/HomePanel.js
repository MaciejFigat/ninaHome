import React from 'react'
import nina1 from '../assets/nina1.jpg'
import {
  WrapperCentringDiv,
  CardWrapper,
  CardProper,
  CoverImage,
  CardH3,
  CardH2,
} from '../styles/styled'
import AnimatedPanel from './animated/AnimatedPanel'
import { fitnessData } from '../data/fitness'
import { offerData } from '../data/offer'
import { plansData } from '../data/plans'
import { ReactComponent as Parrots } from '../assets/parrots.svg'

const HomePanel = () => {
  return (
    <>
      <AnimatedPanel data={fitnessData} Icon={Parrots} />
      <AnimatedPanel data={offerData} Icon={Parrots} />
      <AnimatedPanel data={plansData} Icon={Parrots} />
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
              Pracuję w TI HealthClub oraz studiuję Fizjoterapię na AWF w
              Warszawie.
            </CardH3>
          </CardProper>
        </CardWrapper>
      </WrapperCentringDiv>
    </>
  )
}

export default HomePanel
