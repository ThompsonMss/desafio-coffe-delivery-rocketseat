import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Home } from '@/pages/Home'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}