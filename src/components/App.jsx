import React from "react";
import Header from "./Header";
import ContentList from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";
import FetchMoreButton from "./FetchMoreBtn";
import LoadingPage from "./Loading/Loading";

const App = () => {
    const [characters, dataInfo, fetch, nextPage, prevPage, fetchMore, isLoading] = useFetchContent();
    return (
        <div className="App">
            <Header
                onSearch={fetch}
                disabledInfoNext={dataInfo.next}
                disabledInfoPrevious={dataInfo.prev}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            {isLoading
                ? <LoadingPage/>
                : <ContentList content={characters}/>
            }


            <FetchMoreButton
                btnText={'Show more elements'}
                clickFoo={fetchMore}
                disableInfo={characters.length === 20}
            />
        </div>
    );
};

export default App;
