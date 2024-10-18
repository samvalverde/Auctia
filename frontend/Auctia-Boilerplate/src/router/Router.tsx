import { Routes, Route } from 'react-router-dom'
import PATHS from './paths'
import Load from '../pages/Load'
import SearchProduct from '../pages/SearchProduct'
import HomePage from '../pages/HomePage'

const Router = () => {
  return (
    <Routes>
        <Route path={PATHS.home} element={<HomePage />} />
        <Route path={PATHS.dist.load_inventory} element={<Load />} />
        <Route path={PATHS.dist.search_product} element={<SearchProduct />} />
    </Routes>
  );
};

export default Router