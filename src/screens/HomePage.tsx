import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConcerts } from '../redux/reducers/concertsReducer';
import { MainPageConcerts } from '../components/MainPageConcerts/MainPageConcerts';
import { Concert, modalConcert } from '../types/concerts.types';
import getConcerts from '../mocks/getConcerts';
import { selectConcert } from '../redux/reducers/selectedConcertReducer';

export const HomePage = () => {
  const { concerts } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConcerts(getConcerts))
  }, [])

  const [showModal, setShowModal]: [boolean, Function] = useState(false);
  const [modalConcert, setModalConcert]: [modalConcert, Function] = useState({});

  const modalHandler = (show: boolean, concertId: string) => {
    const selectedConcert = concerts.find((c: Concert) => c.id === concertId);
    setShowModal(show);
    setModalConcert(selectedConcert);
  }

  const mapConcertToProps = (concert: Concert) => {
    return {
        concertName: concert.concertTitle,
        concertLocation: concert.concertLocationName,
        concertDate: concert.concertDate,
        concertId: concert.id,
        buttonText: "Detalles",
    }
  }

  return (
    <div>
      {concerts.length ? concerts.map((concert: Concert) => (
        <MainPageConcerts  
          key={concert.id} 
          concert={mapConcertToProps(concert)} 
          onClick={modalHandler}/>
      )) : null}
    </div>
  )
}
