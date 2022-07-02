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

  return (
    <div className='singleConcertsMainDiv'>
        <div className='singleConcertsDate'>
            <h1 className='singleConcertsDateNumberText'>{dayNumber}</h1>
            <h2 className='singleConcertsDateText'>{month}</h2>
            <h2 className='singleConcertsDateText'>{year}</h2>
            <div className='singleConcertsTicketsButton'>
                <Button onClick={onTicketClick}>{props.concert.concertType === 'free' ? 'Conseguir' : 'Comprar'}</Button>
            </div>
        </div>
        <Separator />
        <div className='singleConcertsInfo'>
            <h1 className='singleConcertsTitle'>{props.concert.concertTitle}</h1>
            <div className='singleConcertsTimeLocation'>
                <h2 className='singleConcertsText'>{time}</h2>
                <Separator />
                <h2 className='singleConcertsText'>{props.concert.concertLocationName}</h2>
            </div>
            <div className='singleConcertsMainInfo'>
                <div className='singleConcertsPersonalInfo'>
                    <h2 className='singleConcertsMainText'>DIRECTOR</h2>
                    <h3 className='singleConcertsText'>{props.concert.conductor}</h3>
                    {props.concert.soloists.length > 0 && <h2 className='singleConcertsMainText'>SOLISTAS</h2>}
                    {props.concert.soloists.map((solo) => <h3 key={solo.name} className='singleConcertsText'>{solo.name}, {solo.instrument}</h3>)}
                </div>
                <Separator />
                <div className='singleConcertsProgramInfo'>
                    <h2 className='singleConcertsMainText'>PROGRAMA</h2>
                    {props.concert.program.composers.map(
                        (comp) => <h3 key={comp.shortName} className='singleConcertsText'>{comp.shortName}</h3>)}
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