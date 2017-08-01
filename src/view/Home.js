
import React from 'react'
import styled from 'styled-components'

import {getTheme} from 'view/theme'

import {Github} from 'view/Svg/Github'
import {Linkedin} from 'view/Svg/Linkedin'

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: ${getTheme('black')}
`

const H1 = styled.h1`
  color: ${getTheme('accent')};
  font-family: 'Roboto Condensed';
  font-size: 30vw;
  font-weight: 400;
  line-height: 1;
`

const Hr = styled.hr`
  width: 50%;
  margin-left: 0;
  border-color: ${getTheme('primary')}
`

const Ul = styled.ul`
  margin-top: 1rem;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const A = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${getTheme('grays', 'medium')};
  & svg {
    margin-right: 0.5rem;
  }
`

export const Home = () => (
  <Section>
    <H1>Bryan Fillmer</H1>
    <Hr />
    <Ul>
      <Li><A href='https://github.com/bfillmer/'><Github /> Github</A></Li>
      <Li><A href='https://www.linkedin.com/in/bfillmer/'><Linkedin /> Linkedin</A></Li>
    </Ul>
  </Section>
)
