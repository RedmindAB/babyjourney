import { Reducer, ReducersMapObject, combineReducers } from 'redux'
import { persistCombineReducers, PersistConfig } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { BottomTabBarState } from './bottomTabBar/types'
import { bottomTabBarReducer } from './bottomTabBar/reducer'
import { UserState } from './user/types'
import { userReducer } from './user/reducer'

export interface ApplicationState {
  bottomTabBar: BottomTabBarState
  user: UserState
}

// const persistConfig = {
//   key: 'primary',
//   whitelist: [],
//   storage
// }

const rootReducers: ReducersMapObject<ApplicationState, any> = {
  bottomTabBar: bottomTabBarReducer,
  user: userReducer
}

// export const reducers: Reducer<ApplicationState> = persistCombineReducers<ApplicationState>(
//   // persistConfig,
//   rootReducers
// )

export const reducers = combineReducers(rootReducers)
