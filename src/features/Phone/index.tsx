import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useAppDispatch } from '../../app'
import { setPhone } from '../../entities'
import { FormInputsType } from './types'
import { Button, Input } from '../../shared'

import classes from './Phone.module.sass'

const Phone: React.FC = () => {
  const dispatch = useAppDispatch()

  const schema = yup
    .object()
    .shape({
      phone: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(11, 'Must be exactly 11 digits')
        .max(11, 'Must be exactly 11 digits'),
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputsType>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<FormInputsType> = (data) => {
    const getPhone = () => {
      if (data.phone[0] === '8') {
        return data.phone.replace('8', '7')
      }
      return data.phone
    }

    dispatch(setPhone(`${getPhone()}@c.us`))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Input id="phone" register={register} errors={errors} placeholder="79112233444" />

      <Button title="Create chat" />
    </form>
  )
}

export default Phone
