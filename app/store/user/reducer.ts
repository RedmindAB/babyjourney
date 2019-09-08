import { Reducer } from 'redux'

import { UserState, UserActions } from './types'
import { getWeekAndDay } from '../../utils'

const INITIAL_STATE: UserState = {
  dueDate: new Date(),
  selectedWeek: getWeekAndDay(new Date()).weeks
}

export const userReducer: Reducer<UserState, UserActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/SELECT_WEEK':
      return { ...state, selectedWeek: action.week }
    case '@user/SET_DUE_DATE':
      return {
        ...state,
        dueDate: action.dueDate,
        selectedWeek: getWeekAndDay(action.dueDate).weeks
      }
    default:
      return state
  }
}
