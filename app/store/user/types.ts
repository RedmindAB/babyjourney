import { Action } from 'redux'

export type UserState = {
  dueDate: Date
  selectedWeek: number
}

export interface SetDueDateAction extends Action {
  type: '@user/SET_DUE_DATE'
  dueDate: Date
}

export interface SelectWeekAction extends Action {
  type: '@user/SELECT_WEEK'
  week: number
}

export type UserActions = SetDueDateAction | SelectWeekAction
