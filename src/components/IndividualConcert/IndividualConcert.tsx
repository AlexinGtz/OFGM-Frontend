import React, { useEffect, useState } from 'react'
import { Separator } from '../Separator/Separator';
import WholeOrchestra from '../../assets/WholeOrchestra.jpg';

import './IndividualConcert.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Concert, movement, person, piece } from '../../types/concerts.types';
import { API } from '../../utils/api';
import { convertDateTime } from '../../utils/dateUtils';

export const IndividualConcert = () => {
    const { id } = useParams();
    const { concerts } = useSelector((state: any) => state);
    const [concert, setConcert]: [Partial<Concert>, Function] = useState({});
    const api = new API();

    useEffect(() => {
        let tempConcert = concerts.find((concert: Concert) => concert.id === id);

        if(!tempConcert) {
            fetchConcert().then((concert: Concert) => {
                setConcert(concert);
            });
        } else{
            setConcert(tempConcert);
        }
    });

    const fetchConcert = async () => {
        return api.get(`/concert/${id}`);
    }

    const buildProgram = () => {
        return <h1>Hello</h1>
    }

    const concertDate = convertDateTime(concert.concertDate);

  return (
    <div className='individualConcertMainDiv'>
        <h1 className='individualConcertTitle'>{concert.concertTitle}</h1>
        <div className='individualConcertDateInfo'>
            <h2 className='individualConcertDateText'>{concertDate.dayNumber} de {concertDate.month}</h2>
            <Separator height='2.5rem'/>
            <h2 className='individualConcertDateText'>{concertDate.time}</h2>
            <Separator height='2.5rem' />
            <h2 className='individualConcertDateText'>{concert.concertLocationName}</h2>
        </div>

        <img src={WholeOrchestra} className='individualConcertImage'/>

        <div className='individualConcertInfo'>
            <div className='individualConcertProgram'>
                <h1 className='individualConcertInfoTitle'>PROGRAMA</h1>
            </div>
            <div className='individualConcertExtraInfo'>
                <h1 className='individualConcertInfoTitle'>DIRECTOR</h1>
                <h2 className='individualConcertInfoText'>Nombre Apellido</h2>

                <h1 className='individualConcertInfoTitle'>SOLISTAS</h1>
                <h2 className='individualConcertInfoText'>Nombre Apellido, Instrumento</h2>

                <h1 className='individualConcertInfoTitle'>SALA DE CONCIERTOS</h1>
                <img className='individualConcertLocationImage'/>
            </div>
        </div>
    </div>
  )
}
