import { Reducer } from 'redux'

import { UserState, UserActions } from './types'
import { getWeekAndDay } from '../../utils'

const INITIAL_STATE: UserState = {
  hasSeenCongratsModal: false,
  hasSeenOnboarding: false,
  dueDate: new Date(),
  topics: [],
  selectedWeek: getWeekAndDay(new Date()).weeks
}

export const userReducer: Reducer<UserState, UserActions> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/SET_TOPICS':
      return { ...state, topics: action.topics }
    case '@user/HAS_SEEN_ONBOARDING':
      return { ...state, hasSeenOnboarding: action.hasSeenOnboarding }
    case '@user/SET_HAS_SEEN_CONGRATULATIONS':
      return { ...state, hasSeenCongratsModal: action.hasSeenCongratularionsModal }
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
