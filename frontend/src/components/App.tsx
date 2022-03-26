import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/404'));
const WOS = lazy(() => import('pages/WOS'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wos" element={<WOS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
