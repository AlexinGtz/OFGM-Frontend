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

    return (
        <div>
            <div className='backdrop' onClick={messageHandler}/>
            <div className='screenMessageMainDiv'>
                <h2 className={screenMessage.type}>{screenMessage.message}</h2>
                {
                    screenMessage.enableButton && 
                    <a href={screenMessage.buttonUrl} className="screenMessageAnchor">{screenMessage.buttonText}</a>
                }
                <div className='screenMessageButtonDiv'>
                    <div className='screenMessageButton'>
                        <Button onClick={messageHandler}>Cerrar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
