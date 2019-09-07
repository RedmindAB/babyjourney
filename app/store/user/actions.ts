import { ActionCreator } from 'redux'
import { SetDueDateAction } from './types'

export const setDueDate: ActionCreator<SetDueDateAction> = (dueDate: Date) => ({
  type: '@user/SET_DUE_DATE',
  dueDate
})
