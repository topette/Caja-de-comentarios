import React from 'react'
import ReactDOM from 'react-dom/client'
import Comments from './Comments'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Comments currentUserId="1"/>
  </React.StrictMode>
)