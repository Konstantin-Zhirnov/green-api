import React, { lazy, Suspense } from 'react'

import { getIdInstance, getPhone } from '../../entities'
import { useAppSelector } from '../../app'

const Authorisation = lazy(() => import('../../widgets/Authorisation'))
const Phone = lazy(() => import('../../widgets/Phone'))
const Chat = lazy(() => import('../../widgets/Chat'))

import classes from './Home.module.sass'

const Home = () => {
  const idInstance = useAppSelector(getIdInstance)
  const phone = useAppSelector(getPhone)

  const getWidget = (): JSX.Element => {
    if (idInstance && phone) {
      return <Chat />
    }

    if (idInstance && !phone) {
      return <Phone />
    }

    return <Authorisation />
  }

  return (
    <main className={classes.main}>
      <Suspense>{getWidget()}</Suspense>
    </main>
  )
}

export default Home
