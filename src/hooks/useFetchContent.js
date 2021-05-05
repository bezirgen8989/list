import {useCallback, useEffect, useState} from "react";
import * as axios from 'axios';

export const useFetchContent = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const [characters, setCharacters] = useState([]);
    const [dataInfo, setDataInfo] = useState([]);
    const [charactersCount, setCharactersCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const [errStatus, setErrStatus] = useState(false)
    const [errMessage, setErrMessage] = useState('Something wrong')

    useEffect(() => {
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                const allElems = res.data.results;
                setCharacters(allElems.slice(0, charactersCount));
                setDataInfo(res.data.info);
                setIsLoading(false)
            })
    }, [url, charactersCount])

    const nextPage = useCallback(() => {
        setUrl(dataInfo.next)
        setCharactersCount(10)
    }, [dataInfo])

    const prevPage = useCallback(() => {
        setCharactersCount(10)
        setUrl(dataInfo.prev)
    }, [dataInfo])

    const fetchMore = useCallback(() => {
        setCharactersCount(prevState => prevState + 10)
    }, [])

    const fetch = useCallback(async (searchInputData) => {
        try {
            await axios.get(`${url}?name=${searchInputData}`)
                .then(res => {
                    setCharacters(res.data.results)
                })
        } catch (err) {
            setErrStatus(true)
            setTimeout(()=>{
                setErrStatus(false)
            }, 3000)
            setErrMessage(err.response.data.error)
        }


    }, [url]);

    return [characters, dataInfo, fetch, nextPage, prevPage, fetchMore, isLoading, errMessage, errStatus];
};