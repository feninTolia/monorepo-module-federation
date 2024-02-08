import { Suspense } from 'react';
import { AboutLazy } from '@/pages/about/About.lazy';
import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';
import { adminRoutes } from '@packages/shared/src/routes/admin';
const routes = [
  {
    path: adminRoutes.admin,
    element: <App msg="Kyiv is nice" />,
    children: [
      {
        path: adminRoutes.admin,
        element: (
          <Suspense fallback={'Loading...'}>
            <AboutLazy />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
