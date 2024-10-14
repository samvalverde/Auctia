import { Routes, Route } from 'react-router-dom'
import PATHS from './paths'
import LoadInventory from '../pages/LoadInventory'
import SearchProduct from '../pages/SearchProduct'

const Router = () => {
  return (
    <Routes>
        <Route path={PATHS.dist.load_inventory} element={<LoadInventory />} />
        <Route path={PATHS.dist.search_product} element={<SearchProduct />} />
    </Routes>
  );
};

export default Router