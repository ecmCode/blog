import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes , Route, Navigate } from 'react-router-dom'
import { Home, Header, Contact, Blog, NotFound} from './components'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/home' exact element={<Home/>} />
          <Route path='/blog' exact element={<Blog/>} />
          <Route path='/contact' exact element={<Contact/>} />
          <Route path='/404' exact element={<NotFound/>} />
          <Route path="/blogger" element={<Navigate to="/home" />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    </BrowserRouter>    
  </React.StrictMode>
)
