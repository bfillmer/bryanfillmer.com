
import React from 'react'
import styled from 'styled-components'

import {getTheme} from 'view/theme'

import {Github} from 'view/Svg/Github'
import {Linkedin} from 'view/Svg/Linkedin'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${getTheme('black')}
`

export const Home = () => (
  <Section>
    <h1>Bryan Fillmer</h1>
    <hr />
    <ul>
      <li><a href='https://github.com/bfillmer/'><Github /> Github</a></li>
      <li><a href='https://www.linkedin.com/in/bfillmer/'><Linkedin /> Linkedin</a></li>
    </ul>
  </Section>
)
