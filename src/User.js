import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export const User = () => {
  return (
    <div>
         <nav>
        <Link to="Html">Html</Link>
        <Link to="Css">Css</Link>
      </nav>

      <Outlet />
    </div>
  )
}
