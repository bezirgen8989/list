import {useCallback, useEffect, useState} from "react";
import * as axios from 'axios';


export const useFetchContent = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const [characters, setCharacters] = useState([]);
    const [dataInfo, setDataInfo] = useState([]);


    useEffect(()=>{
        axios.get(url)
            .then(res=>{
                setCharacters(res.data.results)
                setDataInfo(res.data.info)
            })
    }, [url])

    const nextPage = () => {
        setUrl(dataInfo.next)
    };

    const prevPage = () => {
        setUrl(dataInfo.prev)
    };


    const fetch = useCallback(() => {
        console.log('test')
    }, []);

    return [characters, dataInfo, fetch, nextPage, prevPage];
};

// export const useFetchContent = () => {
//   const [imgList, setImgList] = useState([]);
//   const fetch = useCallback(async () => {
//     /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
//       (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
//     */
//     setImgList([]);
//   }, []);
//
//   // TODO: Put fetchMore method here
//
//   return [imgList, fetch];
// };
