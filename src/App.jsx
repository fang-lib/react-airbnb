import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppHeader from './compoents/app-header/app-header'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <AppHeader/>
      <Suspense fallback="loading">
        {useRoutes(routes)}
      </Suspense>
      <div>footer</div>
    </div>
  )
})

export default App