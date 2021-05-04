import React from 'react';
import './index.css';

const FetchMoreButton = ({btnText, clickFoo, disableInfo})=>{
    return(
        <div className={'fetchMore'}>
            <button
                onClick={clickFoo}
                style={disableInfo
                    ? {display: 'none'}
                    : null
                }
            >{btnText}</button>
        </div>

    )
};
export default FetchMoreButton;
