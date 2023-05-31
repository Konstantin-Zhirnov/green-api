export type UserStateType = {
  apiTokenInstance: string
  idInstance: string
  messages: MessageType[]
  phone: string
}

export type MessageType = Record<'id' | 'own' | 'message', string>

export type AuthType = {
  idInstance: string
  apiTokenInstance: string
}

export type ResponseMessageType = {
  receiptId: number
  body: BodyType
}

type BodyType = {
  typeWebhook: string
  instanceData: InstanceDataType
  timestamp: number
  idMessage: string
  senderData: SenderDataType
  messageData: MessageDataType
}

type InstanceDataType = {
  idInstance: number
  wid: string
  typeInstance: string
}

type SenderDataType = Record<'chatId' | 'chatName' | 'sender' | 'senderName', string>

type MessageDataType = {
  typeMessage: string
  textMessageData: TextMessageDataType
}

type TextMessageDataType = {
  textMessage: string
}
