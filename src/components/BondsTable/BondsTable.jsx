import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import {
  Alert, Button, Card, Form,
} from 'react-bootstrap';
import {
  selectBondsData, selectBondsIsError, selectBondsIsLoaded, selectBondsIsLoading,
} from '../../__data__/selectors';
import BondRow from './BondRow.jsx';
import Loader from '../Loader/Loader.jsx';
import { fetchBonds } from '../../__data__/actions';

const BondsTable = () => {
  const [filterValue, setFilterValue] = useState('');
  const bondsData = useSelector(selectBondsData);
  const isLoading = useSelector(selectBondsIsLoading);
  const isLoaded = useSelector(selectBondsIsLoaded);
  const error = useSelector(selectBondsIsError);
  const dispatch = useDispatch();
  const onRefresh = useCallback(() => {
    dispatch(fetchBonds());
  }, []);
  if (error) {
    return <Alert style={{ margin: '40px' }} variant={'danger'}>
        {error.message || 'Неизвестная ошибка'}
      </Alert>;
  }

  const filterInputHandle = (event) => {
    setFilterValue(event.target.value);
  };

  const filterName = (bond) => (filterValue.trim()
    ? bond.title.toLowerCase().includes(filterValue.toLowerCase())
    : true
  );

  return (
      <>
      {isLoading && <Loader />}
          {isLoaded
          && <>
            <div className={'container-fluid text-center'} style={{ padding: '30px' }}>
              <Button variant="primary" onClick={onRefresh}>Обновить</Button>
            </div>
            <Card body>
              <h3>Облигации уровня листинга 1</h3>
            <p>Полная цена = цена + НКД + комиссия</p>
            <p>Доход нетто /суммарный доход на 1 шт/
              = (купоны - НДФЛ) * шт + номинал - полная цена</p>
            <Form style={{ margin: '30px', width: '200px' }}>
              <Form.Label>Фильтр</Form.Label>
              <Form.Control size="sm" type="text" placeholder="Название" onChange={filterInputHandle} value={filterValue} />
            </Form>
            </Card>
              <Table striped bordered hover size="sm" className={'text-center'}>
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Название</th>
                      <th>Цена</th>
                      <th>НКД</th>
                      <th>Полная цена</th>
                      <th>Купон</th>
                      <th>КупонНДФЛ</th>
                      <th>След.купон</th>
                      <th>Интервал</th>
                      <th>Купонов</th>
                      <th>Доход, нетто</th>
                      <th>% год.</th>
                      <th>До погашения</th>
                      <th>Погашение</th>

                  </tr>
                  </thead>
                  <tbody>
                  {
                      bondsData
                        .filter(filterName)
                        .sort((a, b) => (a.daysTillEnd > b.daysTillEnd ? 1 : -1))
                        .map((bond, index) => <BondRow key={bond.key} index={index} bond={bond}/>)
                  }
                  </tbody>
              </Table>
          </>}
      </>
  );
};

export default BondsTable;
