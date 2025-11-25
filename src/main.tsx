import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./assets/style/main.scss"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import { RouterProvider } from "react-router-dom"
import { router } from './config/routes/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider> 
  </StrictMode>,
)
