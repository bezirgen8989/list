import React from 'react';
import './index.css';

const FetchMoreButton = ({btnText, clickFoo, disableInfo})=>{
    return(
        <div className={'fetchMore'}>
            <button
                onClick={clickFoo}
                className={disableInfo ? 'disableBtn' : null}
            >{btnText}</button>
        </div>

    )
};
export default FetchMoreButton;
