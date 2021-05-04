import React from "react";
import './index.css'

const ContentList = ({content}) => {
    return (
        <ul className={'contentList'}>
            {content.map(item => {
                return (
                    <li key={item.id}>
                        <div className={'infoBlock'}>
                            <img src={item.image} alt={item.image}/>
                            <div className={'textInfo'}>
                                <span>Name: {item.name}</span>
                                <span>Status: {item.status}</span>
                                <span>Species: {item.species}</span>
                                <span>Species: <a
                                    href={item.origin.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >{item.origin.name}</a></span>
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
