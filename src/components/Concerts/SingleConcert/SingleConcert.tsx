import React from 'react'
import { useSelector } from 'react-redux'
import { Concert, SingleConcertProps } from '../../../types/concerts.types'
import { convertDateTime } from '../../../utils/dateUtils'
import { Button } from '../../Button/Button'
import { Separator } from '../../Separator/Separator'
import { useNavigate } from "react-router-dom";

import './SingleConcert.css'

const SingleConcert = (props: SingleConcertProps) => {
    const navigate = useNavigate();

    const {
        dayNumber,
        month,
        year,
        time
    } = convertDateTime(props.concert.concertDate);

    const onDetailsClick = () => {
        navigate(`/concerts/${props.concert.id}`);
    }

    const onTicketClick = () => {
        navigate(`/tickets/${props.concert.id}`)
    }

    const reserveButton = (
        <div className='singleConcertsTicketsButton'>
                <Button onClick={onTicketClick}>{props.concert.concertType === 'free' ? 'Reservar' : 'Comprar'}</Button>
        </div>
    )

    const concertDate = new Date(props.concert.concertDate);
    const today = new Date();

  return (
    <div className='singleConcertsMainDiv'>
        <div className='singleConcertsDate'>
            <h1 className='singleConcertsDateNumberText'>{dayNumber}</h1>
            <h2 className='singleConcertsDateText'>{month}</h2>
            <h2 className='singleConcertsDateText'>{year}</h2>
            {concertDate >= today && reserveButton}
        </div>
        <Separator height='16rem' />
        <div className='singleConcertsInfo'>
            <h1 className='singleConcertsTitle'>{props.concert.concertTitle}</h1>
            <div className='singleConcertsTimeLocation'>
                <h2 className='singleConcertsText'>{time}</h2>
                <Separator height='2rem' />
                <h2 className='singleConcertsText'>{props.concert.concertLocationName}</h2>
            </div>
            <div className='singleConcertsMainInfo'>
                <div className='singleConcertsPersonalInfo'>
                    <h2 className='singleConcertsMainText'>DIRECTOR</h2>
                    <h3 className='singleConcertsText'>{props.concert.conductor}</h3>
                    {props.concert.soloists.length > 0 && <h2 className='singleConcertsMainText'>SOLISTAS</h2>}
                    {props.concert.soloists.map((solo) => <h3 key={solo.name} className='singleConcertsText'>{solo.name}, {solo.instrument}</h3>)}
                </div>
                <Separator height='10rem'/>
                <div className='singleConcertsProgramInfo'>
                    <h2 className='singleConcertsMainText'>PROGRAMA</h2>
                    {props.concert.program.map(
                        (piece) => <h3 key={piece.composer.shortName} className='singleConcertsText'>{piece.composer.shortName}</h3>)}
                </div>
            </div>
            <div className='singleConcertsButtonContainer'>
                <div className='singleConcertsDetailsButton'>
                    <Button onClick={onDetailsClick}>Detalles</Button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SingleConcert