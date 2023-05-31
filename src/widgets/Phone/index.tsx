import React, { Suspense } from 'react'

import { Phone } from '../../features'
import { WhatsApp } from '../../shared'

import classes from './Phone.module.sass'

export default () => {
  return (
    <section className={classes.container}>
      <div>
        <h1>Create chat</h1>
        <Suspense>
          <Phone />
        </Suspense>
      </div>

      <WhatsApp />
    </section>
  )
}
