import React from 'react'
import cn from 'classnames'

import classes from './Message.module.sass'

interface IProps {
  own: string
  message: string
  index?: number
}

const Message: React.FC<IProps> = React.memo(({ message, own }) => {
  return (
    <div className={cn(classes.container, { [`${classes.me}`]: own === 'me' })}>
      <div className={classes.message}>{message}</div>
    </div>
  )
})

export default Message
