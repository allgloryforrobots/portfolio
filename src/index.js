import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './fonts/DINPro.ttf'
import './fonts/DINPro-Bold.ttf'
import './fonts/DINPro-Black.ttf'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

