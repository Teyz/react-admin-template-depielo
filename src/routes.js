import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import DashboardApp from './pages/DashboardApp';
import View from './pages/View';
import Success from './pages/Success';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'view', element: <View /> },
        { path: 'success', element: <Success /> },
        { path: '404', element: <NotFound /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
