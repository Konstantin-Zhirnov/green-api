import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../../app'
import { getApiTokenInstance, getIdInstance, getMessages, setMessage } from '../../../../entities'
import { List } from '../../../../shared'

import { useGetMessagesQuery, useDeleteMessageMutation } from '../../api'
import { MessageType } from '../../types'

import Message from './Message'

import classes from './Messages.module.sass'

const Messages: React.FC = React.memo(() => {
  const dispatch = useAppDispatch()
  const messages = useAppSelector(getMessages)
  const idInstance = useAppSelector(getIdInstance)
  const apiTokenInstance = useAppSelector(getApiTokenInstance)

  const [deleteMessage] = useDeleteMessageMutation()

  const { data } = useGetMessagesQuery(
    `https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
    {
      pollingInterval: 5000,
    },
  )

  React.useEffect(() => {
    if (data) {
      dispatch(
        setMessage({
          id: data.receiptId.toString(),
          own: data.body?.senderData?.senderName,
          message: data.body?.messageData?.textMessageData?.textMessage,
        }),
      )

      deleteMessage(
        `https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`,
      )
    }
  }, [data])

  const renderItem = (item: MessageType, index?: number) => (
    <Message key={item.id} message={item.message} own={item.own} index={index || 0} />
  )

  return (
    <div className={classes.container}>
      <List items={messages} renderItem={renderItem} />
    </div>
  )
})

export default Messages
