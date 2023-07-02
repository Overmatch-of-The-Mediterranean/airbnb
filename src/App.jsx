import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollTop from './hooks/useScrollTop'

const App = memo(() => {
    useScrollTop()
  return (
    <div>
        <Header></Header>
        <div className="page">
            {
                useRoutes(routes)
            }
        </div>
        <AppFooter/>
    </div>
  )
})

export default App