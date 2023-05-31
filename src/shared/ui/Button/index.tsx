import React from 'react'

import classes from './Button.module.sass'

interface IProps extends React.BlockquoteHTMLAttributes<HTMLButtonElement> {
  title: string
}

const Button: React.FC<IProps> = ({ title, ...restProps }) => {
  return (
    <button type="submit" className={classes.btn} {...restProps}>
      {title}
    </button>
  )
}

export default Button
