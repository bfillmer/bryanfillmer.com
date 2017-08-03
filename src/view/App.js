
import React from 'react'
import styled from 'styled-components'

// @TODO Move these to one Icons file, srsly.
import {Github} from 'view/Svg/Github'
import {Linkedin} from 'view/Svg/Linkedin'
import {Medium} from 'view/Svg/Medium'

// Color Theme Used
// https://coolors.co/c1cfda-f7f7f2-4281a4-ff4a1c-03191e

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  background-color: #03191e;
  @media (min-width: 45rem) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const H1 = styled.h1`
  color: #ff4a1c;
  font-family: 'Roboto Condensed';
  font-size: 30vw;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.05em;
  @media (min-width: 45rem) {
    font-size: 6rem;
  }
`

const Hr = styled.hr`
  width: 20rem;
  margin-left: 0;
  border-color: #4281a4;
  @media (min-width: 45rem) {
    margin-top: 1.5rem;
  }
  @media (max-width: 20rem) {
    width: 100%;
  }
`

const Ul = styled.ul`
  margin-top: 1rem;
`

const Li = styled.li`
  display: block;
  margin-right: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 45rem) {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const A = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #c1cfda;
  & svg {
    margin-right: 0.5rem;
  }
  & svg path {
    fill: #c1cfda;
  }
  &:hover {
    color: #f7f7f2;
    & svg path {
      fill: #f7f7f2;
    }
  }
`

export const App = () => (
  <Section>
    <H1>Bryan Fillmer</H1>
    <Hr />
    <Ul>
      <Li><A href='https://github.com/bfillmer/'><Github /> Github</A></Li>
      <Li><A href='https://www.linkedin.com/in/bfillmer/'><Linkedin /> Linkedin</A></Li>
      <Li><A href='https://medium.com/@bryanfillmer'><Medium /> Medium</A></Li>
    </Ul>
  </Section>
)
