import React from 'react'
import imageUrl from '../../assets/Cello.jpg';
import { convertDateTime } from '../../utils/dateUtils';
import { Button } from '../Button/Button';
import { ConcertProps } from '../../types/concerts.types';
import './MainPageConcerts.css'

export const MainPageConcerts = (props: ConcertProps) => {
  const {month, dayNumber, time} = convertDateTime(props.concert.concertDate);

  return (
    <div 
        className='mainPageConcertsDiv' 
        onClick={() => props.onClick ? props.onClick(true, props.concert.concertId) : null}>
        <div className='mainPageConcertsImageDiv'>
            <img className='mainPageConcertsImage' src={imageUrl}/>
        </div>
        <div className='mainPageConcertsInfo'>
            <h2 className='mainPageConcertsEvent'>{props.concert.concertName}</h2>
            <h3 className='mainPageConcertsLocation'>{props.concert.concertLocation}</h3>
            <div className='mainPageConcertsDateInfo'>
                <h3>{dayNumber} de {month}</h3>
                <h3 className='mainPageConcertsTime'>{time}</h3>
            </div>
            <div className='mainPageConcertsButton'>
                <div className='mainPageConcertsButtonClass'>  
                    <Button>{props.concert.buttonText || 'Detalles'}</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
