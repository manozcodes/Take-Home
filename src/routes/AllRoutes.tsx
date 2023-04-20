import { Route, Routes } from 'react-router-dom';
import publicRoutes from './PublicRoutes';
import { PublicRouteConfig } from './routeCongig';

const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRouteConfig />}>
        {publicRoutes.map((elem, index) => (
          <Route key={index} path={elem.path} element={<elem.component />} />
        ))}
      </Route>
    </Routes>
  );
};

export default AllRoutes;
