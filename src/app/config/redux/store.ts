import { configureStore } from '@reduxjs/toolkit'

import { messagesApi, userReducer } from '../../../entities'

export const store = configureStore({
  reducer: {
    user: userReducer,
    [messagesApi.reducerPath]: messagesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(messagesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
