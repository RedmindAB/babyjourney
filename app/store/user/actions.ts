import { ActionCreator } from 'redux'
import {
  SetDueDateAction,
  SelectWeekAction,
  SetHasSeenCongratsModalAction,
  SetHasSeeOnboardingAction,
  SetTopicsAtion,
  Topic
} from './types'

export const setDueDate: ActionCreator<SetDueDateAction> = (dueDate: Date) => ({
  type: '@user/SET_DUE_DATE',
  dueDate
})

export const selectWeek: ActionCreator<SelectWeekAction> = (week: number) => ({
  type: '@user/SELECT_WEEK',
  week
})

export const setHasSeenCongratsModal: ActionCreator<SetHasSeenCongratsModalAction> = (
  hasSeenModal: boolean
) => ({
  type: '@user/SET_HAS_SEEN_CONGRATULATIONS',
  hasSeenCongratularionsModal: hasSeenModal
})

export const setHasSeenOnboarding: ActionCreator<SetHasSeeOnboardingAction> = (
  hasSeenOnboarding: boolean
) => ({
  type: '@user/HAS_SEEN_ONBOARDING',
  hasSeenOnboarding
})

export const setTopics: ActionCreator<SetTopicsAtion> = (topics: Topic[]) => ({
  type: '@user/SET_TOPICS',
  topics
})
