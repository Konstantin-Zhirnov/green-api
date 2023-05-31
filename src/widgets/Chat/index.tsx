import React, { Suspense } from 'react'

import { Messages } from '../../entities'
import { AddMessage } from '../../features'

import classes from './Chat.module.sass'

const Chat: React.FC = () => {
  return (
    <Suspense>
      <section className={classes.container}>
        <Messages />

        <AddMessage />
      </section>
    </Suspense>
  )
}

export default Chat
