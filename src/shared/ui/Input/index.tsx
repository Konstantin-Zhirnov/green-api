import React from 'react'

import classes from './Input.module.sass'

interface IProps {
  id: string
  register: any
  errors: any
  placeholder?: string
}

const Input: React.FC<IProps> = ({ id, register, errors, placeholder }) => {
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{id}</label>
      <input
        id={id}
        type="text"
        className={classes.input}
        placeholder={placeholder}
        autoComplete="off"
        {...register(`${id}`)}
      />
      <span className="error">{errors[`${id}`]?.message}</span>
    </div>
  )
}

export default Input
