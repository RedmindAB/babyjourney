import { Action } from 'redux'

export type UserState = {
  dueDate: Date
}

export interface SetDueDateAction extends Action {
  type: '@user/SET_DUE_DATE'
  dueDate: Date
}

export type UserActions = SetDueDateAction
