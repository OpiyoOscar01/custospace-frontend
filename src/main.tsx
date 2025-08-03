import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
// import { store } from './app/redux/store.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}> */}
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      {/* </Provider> */}
    </QueryClientProvider>
  </StrictMode>,
)
