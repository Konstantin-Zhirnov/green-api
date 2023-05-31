import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { v4 } from 'uuid'

import { useAppDispatch, useAppSelector } from '../../app'
import {
  getApiTokenInstance,
  getIdInstance,
  getPhone,
  setMessage,
  useAddMessageMutation,
} from '../../entities'

import { FormInputsType } from './types'
import { ReactComponent as SendIcon } from './send.svg'

import classes from './AddMessage.module.sass'

const AddMessage: React.FC = () => {
  const dispatch = useAppDispatch()
  const apiTokenInstance = useAppSelector(getApiTokenInstance)
  const idInstance = useAppSelector(getIdInstance)
  const phone = useAppSelector(getPhone)

  const schema = yup
    .object()
    .shape({
      message: yup.string().required(),
    })
    .required()

  const [addMessage] = useAddMessageMutation()

  const { register, handleSubmit, reset } = useForm<FormInputsType>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInputsType> = (data) => {
    addMessage({
      url: `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      chatId: phone,
      message: data.message,
    }).unwrap()

    dispatch(
      setMessage({
        id: v4(),
        own: 'me',
        message: data.message,
      }),
    )

    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <input id="message" autoComplete="off" {...register('message')} />

      <button type="submit" className={classes.btn}>
        <SendIcon />
      </button>
    </form>
  )
}

export default AddMessage
