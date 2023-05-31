import Messages from './Messages/components/Messages'
import userReducer from './User/model/slice'

import {
  messagesApi,
  useAddMessageMutation,
  useDeleteMessageMutation,
  useGetMessagesQuery,
} from './Messages/api'

import {
  getApiTokenInstance,
  getIdInstance,
  getMessages,
  getPhone,
  setMessage,
  setPhone,
  setUser,
} from './User/model/slice'

import { MessageType } from './Messages/types'
export type { MessageType }

export {
  getApiTokenInstance,
  getIdInstance,
  getMessages,
  getPhone,
  Messages,
  messagesApi,
  setMessage,
  setPhone,
  setUser,
  useAddMessageMutation,
  useDeleteMessageMutation,
  useGetMessagesQuery,
  userReducer,
}
