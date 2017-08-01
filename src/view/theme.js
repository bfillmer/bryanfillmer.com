
import {darken, lighten} from 'polished'

// https://coolors.co/c1cfda-f7f7f2-4281a4-ff4a1c-03191e
const [
  columbiaBlue,
  whiteSmoke,
  steelBlue,
  oriolesOrange,
  richBlack
] = ['#c1cfda', '#f7f7f2', '#4281a4', '#ff4a1c', '#03191e']

export const theme = {
  primary: oriolesOrange,
  accent: steelBlue,
  white: whiteSmoke,
  black: richBlack,
  grays: {
    light: lighten(0.5, columbiaBlue),
    medium: columbiaBlue,
    dark: darken(0.5, columbiaBlue)
  },
  breakpoint: '45rem'
}

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
