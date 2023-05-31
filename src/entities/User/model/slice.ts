import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../../app'
import { AuthType, MessageType, UserStateType } from '../types'

const initialState: UserStateType = {
  apiTokenInstance: '',
  idInstance: '',
  messages: [],
  phone: '',
}

export const comments = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<MessageType>) => {
      const temp = state.messages
      temp.push(action.payload)
      state.messages = temp
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setUser: (state, action: PayloadAction<AuthType>) => {
      state.idInstance = action.payload.idInstance
      state.apiTokenInstance = action.payload.apiTokenInstance
    },
  },
})

export const { setMessage, setPhone, setUser } = comments.actions

export const getApiTokenInstance = (state: RootState): string => state.user.apiTokenInstance
export const getIdInstance = (state: RootState): string => state.user.idInstance
export const getMessages = (state: RootState): MessageType[] => state.user.messages
export const getPhone = (state: RootState): string => state.user.phone

export default comments.reducer
