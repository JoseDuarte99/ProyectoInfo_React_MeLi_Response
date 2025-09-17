import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppProvider from './context/AppProvider.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';


const queryClient = new QueryClient()



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<App />} />
{/*             
            <Route element={<WithNavbarLayout />}>
              <Route path='/' element={<Main />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/producto/:id' element={<ProductById />} />
            </Route>

            <Route element={<NoNavbarLayout />}>
              <Route path="/checkout" element={<CheckoutLayout />}>
                <Route index element={<CheckoutShipping />} />
              </Route>
              
              <Route path="/crearProducto" element={<CreateProductLayout />}>
                <Route index element={<CreateProduct />} />
                <Route path="form/:category" element={<CreateProductForm />} />
              </Route>

              <Route path='*' element={<NotFound404 />} />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
)
