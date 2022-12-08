import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './compoents/app-footer/app-footer'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <Suspense fallback="loading">
        {useRoutes(routes)}
      </Suspense>
      <AppFooter/>
    </div>
  )
})

export default App