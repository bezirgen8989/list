import {useCallback, useEffect, useState} from "react";
import * as axios from 'axios';

export const useFetchContent = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
    const [characters, setCharacters] = useState([]);
    const [showCharacters, setShowCharacters] = useState([]);
    const [dataInfo, setDataInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errStatus, setErrStatus] = useState(false);
    const [errMessage, setErrMessage] = useState('Something wrong');

    const [btnStatus, setBtnStatus] = useState(false);

    const getData = useCallback(()=>{
        try {
            setIsLoading(true)
            axios.get(url)
                .then(res => {
                    setCharacters(res.data.results);
                    setShowCharacters(res.data.results.slice(0, 10))
                    setDataInfo(res.data.info);
                    setIsLoading(false);
                })
        } catch (err) {
            console.log(err.response.data.error);
        }
    }, [url])

    const onResetSearchSettings = useCallback (()=>{
        setBtnStatus(false)
        setUrl('https://rickandmortyapi.com/api/character/')
        getData();
    }, [getData]);

    useEffect(getData, [url, getData])

    const fetchSearch = useCallback(async (searchInputData) => {
        if (searchInputData === '') {
            setErrStatus(true);
            setTimeout(() => {
                setErrStatus(false)
            }, 3000)
            setErrMessage('Search bar is empty write something!')
        } else {
            try {
                setIsLoading(true);
                await axios.get(`${url}?name=${searchInputData}`)
                    .then(res => {
                        setCharacters(res.data.results)
                        setShowCharacters(res.data.results.slice(0, 10));
                        setDataInfo(res.data.info);
                        setBtnStatus(true);
                        setIsLoading(false);
                    })
            } catch (err) {
                setErrStatus(true);
                setIsLoading(false);
                setTimeout(() => {
                    setErrStatus(false)
                }, 3000)
                setErrMessage(err.response.data.error)
            }
        }
    }, [url]);

    const nextPage = useCallback(() => {
        setUrl(dataInfo.next);
    }, [dataInfo])

    const prevPage = useCallback(() => {
        setUrl(dataInfo.prev);
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
        errStatus,
        onResetSearchSettings,
        btnStatus
    ];
};