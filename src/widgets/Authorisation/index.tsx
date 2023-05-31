import React, { Suspense } from 'react'

import { Authorisation } from '../../features'
import { WhatsApp } from '../../shared'

import classes from './Authorisation.module.sass'

export default () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>Authorisation</h1>
        <Suspense>
          <Authorisation />
        </Suspense>
      </div>

      <WhatsApp />
    </section>
  )
}
