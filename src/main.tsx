import './main.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppProvider from './context/AppProvider.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import Cart from './pages/Cart/Cart.tsx';
import NavbarAndFooterLayout from './layout/NavbarAndFooterLayout.tsx';
import ProductById from './pages/ProductById/ProductById.tsx';
import Home from './pages/Home/Home.tsx';
import SimpleHeaderLayout from './layout/SimpleHeaderLayout.tsx';
import CheckoutShipping from './pages/Checkout/CheckoutShipping.tsx';


const queryClient = new QueryClient()



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<NavbarAndFooterLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/producto/:id' element={<ProductById />} />
            </Route>
            <Route element={<SimpleHeaderLayout />}>
              <Route path='/checkout' element={<CheckoutShipping />}/>
            </Route>

            {/* <Route element={<SimpleHeaderLayout />}>
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


          // <Routes>
          //   <Route path='/' element={<App />} />
          //   <Route path='/carrito' element={<Cart />} />