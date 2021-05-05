import React from 'react';
import './Alert.css'

const Alert = ({errorMessage})=>{
    return(
        <div className={'errAlert'}>
            <span>{errorMessage}</span>
        </div>
    )
}

export default Alert;