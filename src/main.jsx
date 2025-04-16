import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import './styles/index.css'
//Layout
import Layout from "./Layout"

ReactDOM.createRoot(
    document.getElementById('root'))
    .render(
      // <React.StrictMode>
      <Layout />
      // </React.StrictMode>
      ,
    )