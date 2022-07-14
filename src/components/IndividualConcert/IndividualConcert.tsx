import React, { useEffect, useState } from 'react'
import { Separator } from '../Separator/Separator';
import Sorpresa from '../../assets/Sorpresa.jpg';

import './IndividualConcert.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Concert, movement, person, piece } from '../../types/concerts.types';
import { API } from '../../utils/api';
import { convertDateTime } from '../../utils/dateUtils';
import { Button } from '../Button/Button';

export const IndividualConcert = () => {
    const { id } = useParams();
    const { concerts } = useSelector((state: any) => state);
    const [concert, setConcert]: [Partial<Concert>, Function] = useState({});
    const api = new API();
    const navigate = useNavigate();

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

    const buildProgram = (program: Array<piece>) => {
        return program.map((piece: piece) => {
            const composer = <h2 className='individualConcertComposer'>{piece.composer.name}</h2>;
            const name = <h3>{piece.name}</h3>;
            const movements = piece.movements.map((mov: movement) => {
                return <h3 className='individualConcertMovements'>{mov.name}</h3>
            });
            const duration = <h3 className='individualConcertDuration'>{piece.duration}</h3>

            return (
                <div className='individualConcertPiece'>
                    {composer}
                    <div className='individualConcertProgramInfo'>
                        {name}
                        {movements}
                        {duration}
                    </div>
                </div>
            );
        })
    }

    const buildSoloists = (soloists?: Array<person>) => {

        if(!soloists || soloists.length <= 0){
            return null;
        }
        
        return (
            <div>
                <h1 className='individualConcertInfoTitle'>SOLISTAS</h1>
                {soloists.map((solo: person) => <h2 className='individualConcertInfoText'>{solo.name}, {solo.instrument}</h2>)}
            </div>
        );
    }

    const handleButtonClick = () => {
        navigate(`/tickets/${id}`)
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

        <div className='individualConcertButton'>
            <Button onClick={handleButtonClick}>Reservar</Button>
        </div>

        <img src={Sorpresa} className='individualConcertImage'/>

        <div className='individualConcertInfo'>
            <div className='individualConcertProgram'>
                <h1 className='individualConcertInfoTitle'>PROGRAMA</h1>
                {concert.program && buildProgram(concert.program)}
            </div>
            <div className='individualConcertExtraInfo'>
                <h1 className='individualConcertInfoTitle'>DIRECTOR</h1>
                <h2 className='individualConcertInfoText'>{concert.conductor}</h2>

                {buildSoloists(concert.soloists)}

                {/* <h1 className='individualConcertInfoTitle'>SALA DE CONCIERTOS</h1>
                <img className='individualConcertLocationImage'/> */}
            </div>
        </div>
    </div>
  )
}
