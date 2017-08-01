
import {createAction} from 'redux-actions'

import {ROUTE_ABOUT, ROUTE_HOME} from 'types'

// ROUTING
export const routeAbout = createAction(ROUTE_ABOUT)
export const routeHome = createAction(ROUTE_HOME)
