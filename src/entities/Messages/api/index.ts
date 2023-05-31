import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { AddMessageType } from '../types'

export const messagesApi = createApi({
  reducerPath: 'messagesApi',
  tagTypes: ['Messages'],
  baseQuery: fetchBaseQuery(),
  endpoints: (build) => ({
    getMessages: build.query({
      query: (url: string) => url,
      providesTags: (result) => {
        return result
          ? [result, { type: 'Messages', id: 'LIST' }]
          : [{ type: 'Messages', id: 'LIST' }]
      },
    }),

    addMessage: build.mutation({
      query: (body: AddMessageType) => ({
        url: body.url,
        method: 'POST',
        body: { chatId: body.chatId, message: body.message },
      }),
      invalidatesTags: [{ type: 'Messages', id: 'LIST' }],
    }),

    deleteMessage: build.mutation({
      query: (url: string) => ({
        url,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Messages', id: 'LIST' }],
    }),
  }),
})

export const { useGetMessagesQuery, useAddMessageMutation, useDeleteMessageMutation } = messagesApi
