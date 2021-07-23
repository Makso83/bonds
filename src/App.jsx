import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Container } from 'react-bootstrap';
import { fetchBonds } from './__data__/actions';
import Loader from './components/Loader/Loader.jsx';

const BondsTable = React.lazy(() => import('./components/BondsTable/BondsTable.jsx'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBonds());
  }, [dispatch]);
  return (
      <div className="App">
          <Container fluid>
          <Suspense fallback={Loader}
          >
            <BondsTable />
          </Suspense>
          </Container>
      </div>
  );
}

export default App;
