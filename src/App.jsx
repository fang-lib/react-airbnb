import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <div>header</div>
      <Suspense fallback="loading">
        {useRoutes(routes)}
      </Suspense>
      <div>footer</div>
    </div>
  )
})

export default App