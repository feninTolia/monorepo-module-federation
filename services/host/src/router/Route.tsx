import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';
//@ts-ignore
import shopRoutes from 'shop/Router';
//@ts-ignore
import adminRoutes from 'admin/Router';
console.log('shopRoutes -', shopRoutes);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App msg="Kharkiv is nice" />,
    children: [...adminRoutes, ...shopRoutes],
  },
]);
