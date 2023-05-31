import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useAppDispatch } from '../../app'
import { setUser } from '../../entities'
import { Button, Input } from '../../shared'
import { FormInputsType } from './types'

import classes from './Authorisation.module.sass'

const Authorisation: React.FC = () => {
  const dispatch = useAppDispatch()

  const schema = yup
    .object()
    .shape({
      idInstance: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, 'Must be only digits')
        .min(10, 'Must be exactly 10 digits')
        .max(10, 'Must be exactly 10 digits'),
      apiTokenInstance: yup
        .string()
        .required()
        .matches(/^[a-z0-9]+$/, 'Must be only digits or alphabet'),
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
    dispatch(
      setUser({
        idInstance: data.idInstance,
        apiTokenInstance: data.apiTokenInstance,
      }),
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Input id="idInstance" register={register} errors={errors} />

      <Input id="apiTokenInstance" register={register} errors={errors} />

      <Button title="Submit" />
    </form>
  )
}

export default Authorisation
