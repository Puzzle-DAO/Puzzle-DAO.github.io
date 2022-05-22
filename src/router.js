import { Routes, Route } from "react-router-dom";
import { Dashboard, PreSale } from './pages';
import { Layout } from './components';

const Router = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pre-sale" element={<PreSale />} />
      </Routes>
    </Layout>
  );
};

export default Router;
