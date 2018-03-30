
import React from 'react'
import styled, {injectGlobal} from 'styled-components'

import {Github, Linkedin, Medium, Instagram} from 'view/Icons'

const colors = {
  text: '#004466',
  hover: '#000',
  bg: '#00ffa2'
}

injectGlobal`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Cabin Condensed', sans-serif;
    font-size: 1.6rem;
    color: ${colors.text};
    background-color: ${colors.bg};
  }
`

const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  @media (min-width: 45rem) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`

const Flex = styled.div`
  flex: 1;
  display: flex;
  align-items: ${props => props.align};
`

const H1 = styled.h1`
  font-family: 'Lobster Two', cursive;
  font-size: 9rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.05em;
  padding-bottom: 2rem;
`

const HR = styled.hr`
  width: 100%;
  height: 0;
  margin-left: 0;
  border: none;
  border-top: 1px solid ${colors.text};
  @media (min-width: 60rem) {
    width: 50%;
  }
`

const UL = styled.ul`
  padding-top: 1rem;
`

const LI = styled.li`
  display: block;
  margin-right: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 30rem) {
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
  }
`

const A = styled.a`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  color: ${colors.text};
  line-height: 1;
  & svg {
    margin-right: 0.5rem;
  }
  & svg path {
    fill: ${colors.text};
  }
  &:hover {
    color: ${colors.hover};
    & svg path {
      fill: ${colors.hover};
    }
  }
`

export function App () {
  return (
    <Section>
      <Flex align='flex-end'>
        <H1>Bryan Fillmer</H1>
      </Flex>
      <HR />
      <Flex align='flex-start'>
        <UL>
          <LI><A href='https://github.com/bfillmer/'><Github /> Github</A></LI>
          <LI><A href='https://medium.com/@bryanfillmer'><Medium /> Medium</A></LI>
          <LI><A href='https://www.linkedin.com/in/bfillmer/'><Linkedin /> Linkedin</A></LI>
          <LI><A href='https://www.instagram.com/bryan.fillmer/'><Instagram /> Instagram</A></LI>
        </UL>
      </Flex>
    </Section>
  )
}
