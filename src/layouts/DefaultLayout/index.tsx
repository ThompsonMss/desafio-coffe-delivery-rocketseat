import React from 'react'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <header>
      <h1>Laypout</h1>
      <Outlet />
    </header>
  )
}