import { Reducer } from 'redux'

import { UserState, UserActions } from './types'

const INITIAL_STATE: UserState = {
  dueDate: new Date()
}

export const userReducer: Reducer<UserState, UserActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/SET_DUE_DATE':
      return { ...state, dueDate: action.dueDate }
    default:
      return state
  }
}
