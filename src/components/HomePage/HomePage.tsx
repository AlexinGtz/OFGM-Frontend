import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setConcerts } from '../../redux/reducers/concertsReducer';
import { MainPageConcerts } from '../MainPageConcerts/MainPageConcerts';
import { Concert, PartialConcert } from '../../types/concerts.types';
import { API } from '../../utils/api';
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
  const { concerts } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const api = new API();

  useEffect(() => {
    api.get(`/upcomingConcerts`)
    .then(concerts => {
      dispatch(setConcerts(concerts))
    });
  }, [])

  const [showModal, setShowModal]: [boolean, Function] = useState(false);
  const [partialConcert, setPartialConcert]: [PartialConcert, Function] = useState({});

  const modalHandler = (show: boolean, concertId: string) => {
    // const selectedConcert = concerts.find((c: Concert) => c.id === concertId);
    // setShowModal(show);
    // setPartialConcert(selectedConcert);
    navigate(`/concerts/${concertId}`)
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
    <div className='homePageMainDiv'>
      <h1>Orquesta Filarmónica Gustav Mahler</h1>
      <img src="" alt="" />
      <div className='homePageInformation'>
        <h2>¿Quiénes Somos?</h2>
        <h3 className='homePageParagraph'>Una orquesta que busca promover la música académica dentro y fuera de la ZMG. Dándole la oportunidad a los músicos locales de desarrollarse en este ámbito con un ambiente agradable en el que puedan sentirse cómodos para seguir aprendiendo y que se sientan apoyados en todo momento.</h3>
        <h3 className='homePageParagraph' >Nuestra idea de compartir la música académica nace porque muy poca gente muestra interés en este género musical. La meta es lograr acercar a las personas de una manera didáctica y amigable a la belleza que envuelve la música académica.</h3>
      </div>

      <div className='homePageConcerts'>
        <h2>Proximos conciertos</h2>
        {concerts.length ? concerts.map((concert: Concert) => (
          <MainPageConcerts  
            key={concert.id} 
            concert={mapConcertToProps(concert)} 
            onClick={modalHandler}/>
        )) : null}
      </div>

    </div>
  )
}
