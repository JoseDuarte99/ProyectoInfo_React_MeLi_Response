// Import Style
import './main.css';

// Import React
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';

// Import Components
import AppProvider from './context/AppProvider.tsx'
import Cart from './pages/Cart/Cart.tsx';
import NavbarAndFooterLayout from './layout/NavbarAndFooterLayout.tsx';
import ProductById from './pages/ProductById/ProductById.tsx';
import Home from './pages/Home/Home.tsx';
import SimpleHeaderLayout from './layout/SimpleHeaderLayout.tsx';
import CheckoutShipping from './pages/Checkout/CheckoutShipping.tsx';
import NotFound404 from './pages/NotFound404/NotFound404.tsx';
import PublishProduct from './pages/PublishProduct/PublishProduct.tsx';
import PublishProductLayout from './layout/PublishProductLayout.tsx';
import PublishProductForm from './pages/PublishProductForm/PublishProductForm.tsx';
import Help from './pages/Help/Help.tsx';
import OnlyHeaderLayout from './layout/OnlyHeaderLayout.tsx';


const queryClient = new QueryClient()



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            {/* Navbar and Footer ------------- */}
            <Route element={<NavbarAndFooterLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/carrito' element={<Cart />} />
              <Route path='/producto/:id' element={<ProductById />} />
            </Route>

            {/* Simple Header------------- */}
            <Route element={<SimpleHeaderLayout />}>
              <Route path='/checkout' element={<CheckoutShipping />}/>
              <Route path='*' element={<NotFound404 />} />
              {/* Publish Product ------*/}
              <Route path="/publicarProducto" element={<PublishProductLayout />}>
                <Route index element={<PublishProduct/>} />
                <Route path="form/:category" element={<PublishProductForm />} />
              </Route>
            </Route>

            {/* Simple Header------------- */}
            <Route element={<OnlyHeaderLayout />}>
              <Route path='/ayuda' element={<Help />}/>
            </Route>

          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
)
