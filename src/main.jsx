import { createRoot } from 'react-dom/client'
import MainLayout from './layouts/MainLayout'
import styles from './styles/style.module.css'


createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />,
)
