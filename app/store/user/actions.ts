import { ActionCreator } from 'redux'
import { SetDueDateAction, SelectWeekAction } from './types'

export const setDueDate: ActionCreator<SetDueDateAction> = (dueDate: Date) => ({
  type: '@user/SET_DUE_DATE',
  dueDate
})

export const selectWeek: ActionCreator<SelectWeekAction> = (week: number) => ({
  type: '@user/SELECT_WEEK',
  week
})
