import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loading from 'components/Loading';
import JoinRoom from 'pages/JoinRoom';

const Home = lazy(() => import('pages/Home'));
const NotFound = lazy(() => import('pages/404'));
const WNOS = lazy(() => import('pages/WNOS'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/wnos/:code" element={<WNOS />}></Route>
          <Route path="/wnos/join" element={<JoinRoom />}>
            <Route path=":id" element={<JoinRoom />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
