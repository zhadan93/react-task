import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import ROUTES from '@/constants/routes';

import Layout from '@/components/Layout';
import Learning from '@/pages/Learning';
import Tasks from '@/pages/Tasks';
import NotFound from '@/pages/NotFound';

const { BASE, LEARNING, TASKS, NOT_FOUND } = ROUTES;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={LEARNING} element={<Layout />} errorElement={<Navigate to={NOT_FOUND} replace />}>
      <Route index element={<Learning />} />
      <Route path={TASKS} element={<Tasks />} />
      <Route path={NOT_FOUND} element={<NotFound />} />
    </Route>
  ),
  {
    basename: BASE,
  }
);

export default router;
