import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setConcerts } from '../../redux/reducers/concertsReducer';
import { Concert } from '../../types/concerts.types';
import SingleConcert from './SingleConcert/SingleConcert';
import { API } from '../../utils/api';

import './Concerts.css'
import { setAndShowMessage } from '../../redux/reducers/screenMessageReducer';
import { setLoading } from '../../redux/reducers/loadingReducer';
import { Spinner } from '../Spinner/Spinner';

const Concerts = () => {
  const { concerts, loading } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const [year, setYear] = useState('upcoming');
  const api = new API();

  useEffect(() => {
    if(concerts.length <= 0) {
      dispatch(setLoading(true));
      api.get('/upcomingConcerts')
      .then(concerts => {
        dispatch(setConcerts(concerts));
        dispatch(setLoading(false));
      });
    }
  }, []);

  useEffect(() => {
    dispatch(setLoading(true));
    if(year === 'upcoming'){
      api.get('/upcomingConcerts').then(res => {
        dispatch(setConcerts(res));
        dispatch(setLoading(false));
      });
    } else {
      api.get(`/concerts/${year}`).then(res => {
        dispatch(setConcerts(res));
        dispatch(setLoading(false));
      }).catch(err => {
        dispatch(setAndShowMessage({
          message: err.response.data.message,
          type: 'error'
        }));
        dispatch(setLoading(false));
      });
    }
  }, [year]);

  const yearHandler = (value: string) => {
    setYear(value);
  }

  if(loading) {
    return <Spinner />
  }

  return (
    <div>
      <h1>Conciertos</h1>
      <select name='year' className='concertsSelector' onChange={(event) => { yearHandler(event.target.value) }}>
        <option value='upcoming'>Proximos</option>
        <option value='2021'>2021</option>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
      </select>
      <div className='concertsList'>
        {concerts.map((concert: Concert) => <SingleConcert key={concert.id} concert={concert}/>)}
      </div>
    </div>
  )
}

export default Concerts