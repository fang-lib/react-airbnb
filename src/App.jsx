import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './compoents/app-footer/app-footer'
import { useScrollTop } from './hooks/useScrollTop'
import routes from './router'

const App = memo(() => {
  console.log('App组件重新渲染')
  useScrollTop()
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