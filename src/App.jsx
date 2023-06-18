import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Header from './components/app-header'

const App = memo(() => {
  return (
    <div>
        <Header></Header>
        <div className="page">
            {
                useRoutes(routes)
            }
        </div>
        <div className="footer">footer</div>
    </div>
  )
})

export default App