import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setLoading } from '../../redux/reducers/loadingReducer';
import { setAndShowMessage } from '../../redux/reducers/screenMessageReducer';
import { Concert, ConcertDate, PartialConcert } from '../../types/concerts.types'
import { API } from '../../utils/api';
import { convertDateTime } from '../../utils/dateUtils';
import { validateTicketData } from '../../utils/validation';
import { Button } from '../Button/Button';
import { Separator } from '../Separator/Separator';
import { Spinner } from '../Spinner/Spinner';

import './Tickets.css';

export const Tickets = () => {
  const { id } = useParams();
  const { concerts, loading }  = useSelector((state: any) => state);
  const [concert, setConcert]: [PartialConcert, Function] = useState({});
  const [quantity, setQuantity]: [number, Function] = useState(1);
  const [name, setName]: [string, Function] = useState('');
  const [mail, setMail]: [string, Function] = useState('');
  const [confirmMail, setConfirmMail]: [string, Function] = useState('');
  const [concertDate, setConcertDate]: [Partial<ConcertDate>, Function] = useState({});
  const api = new API();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!concerts.length) {
      dispatch(setLoading(true));
      api.get(`/concert/${id}`).then((res) => {
        concertHandler(res);
        dispatch(setLoading(false));
      })
    } else {
        concertHandler(concerts.find((concert: Concert) => concert.id === id));
    }
  }, []);

  useEffect(() => {
    setConcertDate(convertDateTime(concert.concertDate));
  }, [concert])

  const concertHandler = (value: Concert) => {
    setConcert(value);
  }

  const handleQuantity = (quantity: number) => {
    setQuantity((prevQ: number) => {
      const tempSum = prevQ + quantity;

      if(tempSum > 4 || tempSum < 1){
        return prevQ
      }
      return tempSum;
    });
  }

  const sendTicketRequest = () => {
    const validationRes = validateTicketData(name, mail, confirmMail);
    if(!validationRes.success) {
      dispatch(setAndShowMessage({
        message: validationRes.error,
        type: 'error'
      }))
      return;
    }
    dispatch(setLoading(true));
    api.post('/ticketTransaction', {
      atendees: quantity,
      email: mail,
      name: name,
      concertId: id,
    }).then((response) => {
      dispatch(setAndShowMessage({
        message: 'Entrada Reservada con Exito',
        type: 'success',
        enableButton: true,
        buttonText: 'Entrada',
        buttonUrl: response.pdfUrl,
      }))
      dispatch(setLoading(false));
    }).catch(err => {
      dispatch(setAndShowMessage({
        message: err.response.data.message || 'Algo salió mal. Intente de nuevo más tarde',
        type: 'error'
      }))
      dispatch(setLoading(false));
    })
  }

  const mailHandler = (data: string) => {
    setMail(data);
  }

  const nameHandler = (data: string) => {
    setName(data);
  }

  const confirmMailHandler = (data: string) => {
    setConfirmMail(data);
  }

  if(loading) {
    return <Spinner />
  }

  return (
    <div className='ticketsMainDiv'>
      <div className='ticketsHeader'>
        <h1 className='ticketsTitle'>{concert.concertTitle}</h1>
        <div className='ticketsDateInfo'>
          <h2 className='ticketsDateEntry'>{concertDate.dayNumber} de {concertDate.month}</h2>
          <Separator height='1.5rem' />
          <h2 className='ticketsDateEntry'>{concertDate.time}</h2>
          <Separator height='1.5rem' />
          <h2 className='ticketsDateEntry'>{concert.concertLocationName}</h2>
        </div>
      </div>
      <div className='ticketsForm'>
        <div className='ticketsData'>
          <label className='ticketsLabel'>Nombre</label>
          <input type='text' className='ticketsInput' onChange={(event) => { nameHandler(event.target.value) }}/>
          <label className='ticketsLabel'>Correo Electronico</label>
          <input type='email' autoComplete='on' className='ticketsInput' onChange={(event) => { mailHandler(event.target.value) }}/>
          <label className='ticketsLabel'>Confirma Correo Electronico</label>
          <input type='email' className='ticketsInput' onChange={(event) => { confirmMailHandler(event.target.value) }}/>
        </div>

        <div className='ticketsSelectQuantity'>
          <div className='ticketsButton'>
            <Button onClick={() => { handleQuantity(-1) }}>-</Button>
          </div>
          <h1 className='ticketsQuantity'>{quantity}</h1>
          <div className='ticketsButton'>
            <Button onClick={() => { handleQuantity(1) }}>+</Button>
          </div>
        </div>

        <div className='ticketsGetButton'>
          <Button onClick={sendTicketRequest}>Reservar</Button>
        </div>
      </div> 
    </div>
  )
}