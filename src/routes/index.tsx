import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Checkout } from '@/pages/Checkout'
import { Home } from '@/pages/Home'
import { Success } from '@/pages/Success'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function RoutesController() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/success' element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}