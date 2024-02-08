import { App } from '@/components/App';
import { Shop } from '@/pages/shop';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const routes = [
  {
    path: shopRoutes.shop,
    element: <App msg="Kyiv is nice" />,
    children: [
      {
        path: shopRoutes.phones,
        element: (
          <Suspense fallback={'Loading...'}>
            <Shop />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
