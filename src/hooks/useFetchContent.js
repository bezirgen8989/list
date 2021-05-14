import {useCallback, useEffect, useState} from "react";
import * as axios from 'axios';

export const useFetchContent = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const [characters, setCharacters] = useState([]);
    const [showCharacters, setShowCharacters] = useState([]);
    const [dataInfo, setDataInfo] = useState([]);
    const [charactersCount, setCharactersCount] = useState(10)
    const [isLoading, setIsLoading] = useState(false)
    const [errStatus, setErrStatus] = useState(false)
    const [errMessage, setErrMessage] = useState('Something wrong')

    useEffect(() => {
        try {
            setIsLoading(true)
            axios.get(url)
                .then(res => {
                    setCharacters(res.data.results);
                    setShowCharacters(res.data.results.slice(0, 10))
                    setDataInfo(res.data.info);
                    setIsLoading(false)
                })
        }catch (err) {
            console.log(err.response.data.error)
        }
    }, [url, charactersCount])

    const fetchSearch = useCallback(async (searchInputData) => {
        try {
            await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchInputData}`)
                .then(res => {
                    setCharacters(res.data.results)
                    setShowCharacters(res.data.results.slice(0, charactersCount));
                    setDataInfo(res.data.info);
                })
        } catch (err) {
            setErrStatus(true)
            setTimeout(()=>{
                setErrStatus(false)
            }, 3000)
            setErrMessage(err.response.data.error)
        }
    }, [charactersCount]);

    const nextPage = useCallback(() => {
        setUrl(dataInfo.next)
        setCharactersCount(10)
    }, [dataInfo])

    const prevPage = useCallback(() => {
        setCharactersCount(10)
        setUrl(dataInfo.prev)
    }, [dataInfo])

    const fetchMore = useCallback(() => {
        setShowCharacters(prevState => [...prevState, ...characters.slice(10, characters.length)])
    }, [characters])

    return [
        showCharacters,
        dataInfo,
        fetchSearch,
        nextPage,
        prevPage,
        fetchMore,
        isLoading,
        errMessage,
        errStatus
    ];
};