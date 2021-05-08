import React, {useState} from "react";
import './index.css'
import preLoadImage from '../../assets/loaderImgs/loader.gif'

const ContentList = ({content}) => {
    const [imageLoaderStatus, setImageLoaderStatus] = useState(false);

    const imageLoaderFoo = (e)=>{
        setImageLoaderStatus(e.target.clientHeight)
    }

    return (
        <ul className={'contentList'}>
            {content.map(item => {
                return (
                    <li key={String(item.id)}>
                        <div className={'infoBlock'}>
                            <div className={'infoBlock__imageBox'} >
                                <img src={imageLoaderStatus
                                    ? item.image
                                    : preLoadImage
                                } alt={item.image} onLoad={imageLoaderFoo}/>
                            </div>
                            <div className={'textInfo'}>
                                <span>Name: {item.name}</span>
                                <span>Status: {item.status}</span>
                                <span>Species: {item.species}</span>
                                {item.origin.name !== "unknown" && <span>Species: <a
                                    href={item.origin.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >{item.origin.name}</a></span>}
                                <span>Location: <a
                                    href={item.location.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >{item.location.name}</a></span>
                                <span>Created in: {item.created}</span>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default ContentList;
