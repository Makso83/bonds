import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';

const Loader = () => (
    <div className="center-block" style={{ margin: '40px' }}>
        <Alert variant={'info'}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Spinner style={{ marginRight: '20px' }} animation="border" /> {' '}
                Загрузка... подождите
            </div>
        </Alert>
    </div>
);

export default Loader;
