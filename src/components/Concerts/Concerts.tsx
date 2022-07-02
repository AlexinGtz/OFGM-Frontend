import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getConcerts from '../../mocks/getConcerts';
import { setConcerts } from '../../redux/reducers/concertsReducer';
import { Concert } from '../../types/concerts.types';
import SingleConcert from './SingleConcert/SingleConcert'

import './Concerts.css'

const Concerts = () => {
  const { concerts } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if(concerts.length <= 0) {
      dispatch(setConcerts(getConcerts))
    }
  }, []);

  return (
    <div>
      <h1>Conciertos</h1>
      <select name='year' className='concertsSelector'>
        <option value='following'>Proximos</option>
        {/* <option value='2022'>2022</option>
        <option value='2023'>2023</option> */}
      </select>
      <div className='concertsList'>
        {concerts.map((concert: Concert) => <SingleConcert key={concert.id} concert={concert}/>)}
      </div>
    </div>
  )
}

export default Concerts