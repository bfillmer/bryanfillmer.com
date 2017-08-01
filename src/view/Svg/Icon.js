
import styled from 'styled-components'

import {getTheme} from 'view/theme'

export const Icon = styled.svg`
  width: 1rem;
  height: 1rem;
  & path {
    fill: ${getTheme('grays', 'medium')}
  }
`
