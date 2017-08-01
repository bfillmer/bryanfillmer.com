
import {darken, lighten} from 'polished'

// https://coolors.co/c1cfda-f7f7f2-59f8e8-941c2f-03191e
const [
  columbiaBlue,
  whiteSmoke,
  electricBlue,
  vividBurgundy,
  richBlack
] = ['#c1cfda', '#f7f7f2', '#59f8e8', '#941c2f', '#03191e']

export const theme = {
  primary: vividBurgundy,
  accent: electricBlue,
  white: whiteSmoke,
  black: richBlack,
  grays: {
    light: lighten(0.5, columbiaBlue),
    medium: columbiaBlue,
    dark: darken(0.5, columbiaBlue)
  }
}

// Simple helper function, takes in any number of props mapping to properties within the theme
// object and returns the value.
export const getTheme = (...props) => ({theme}) => props.reduce((t, p) => t[p], theme)
