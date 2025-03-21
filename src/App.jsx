import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SearchCountry from './pages/SearchCountry';
import Country from './pages/Country';
import Header from './components/Header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />}>
          <Route path="test" element={<div>TEST</div>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
