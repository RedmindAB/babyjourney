import { Action } from 'redux'

export type Topic = {
  value: string
  selected?: boolean
}

export type UserState = {
  hasSeenOnboarding: boolean
  hasSeenCongratsModal: boolean
  dueDate: Date
  selectedWeek: number
  topics: Topic[]
}

export interface SetDueDateAction extends Action {
  type: '@user/SET_DUE_DATE'
  dueDate: Date
}

export interface SelectWeekAction extends Action {
  type: '@user/SELECT_WEEK'
  week: number
}

export interface SetHasSeenCongratsModalAction extends Action {
  type: '@user/SET_HAS_SEEN_CONGRATULATIONS'
  hasSeenCongratularionsModal: boolean
}

export interface SetHasSeeOnboardingAction extends Action {
  type: '@user/HAS_SEEN_ONBOARDING'
  hasSeenOnboarding: boolean
}

export interface SetTopicsAtion extends Action {
  type: '@user/SET_TOPICS'
  topics: Topic[]
}

export type UserActions =
  | SetDueDateAction
  | SelectWeekAction
  | SetHasSeenCongratsModalAction
  | SetHasSeeOnboardingAction
  | SetTopicsAtion
