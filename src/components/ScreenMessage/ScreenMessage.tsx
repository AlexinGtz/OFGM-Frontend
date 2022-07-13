import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideMessage } from '../../redux/reducers/screenMessageReducer'
import { Button } from '../Button/Button'
import './ScreenMessage.css'

export const ScreenMessage = () => {
    const { screenMessage } = useSelector((state: any) => state)
    const dispatch = useDispatch();

    const messageHandler = () => {
        dispatch(hideMessage())
    }

    const messageClass = `screenMessage ${screenMessage.type}`

    return (
        <div>
            <div className='backdrop' onClick={messageHandler}/>
            <div className='screenMessageMainDiv'>
                <h2 className={messageClass}>{screenMessage.message}</h2>
                <div className='screenMessageButton'>
                    <Button onClick={messageHandler}>Aceptar</Button>
                </div>
            </div>
        </div>
    )
}
