import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer
        position="top-right" 
        autoClose={1000} 
        hideProgressBar={true} 
        closeOnClick 
        pauseOnHover
        draggable 
        theme="light" />
    </QueryClientProvider>
  </StrictMode>,
)
