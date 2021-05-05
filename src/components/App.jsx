import React from "react";
import Header from "./Header";
import ContentList from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";
import FetchMoreButton from "./FetchMoreBtn";
import Loading from "./Loading/Loading";
import Alert from "./Alert/Alert";

const App = () => {
    const [
        characters,
        dataInfo,
        fetch,
        nextPage,
        prevPage,
        fetchMore,
        isLoading,
        errMessage,
        errStatus] = useFetchContent();

    return (
        <div className="App">
            {errStatus
                ?<Alert errorMessage={errMessage}/>
                : null
            }

            <Header
                onSearch={fetch}
                disabledInfoNext={dataInfo.next}
                disabledInfoPrevious={dataInfo.prev}
                nextPage={nextPage}
                prevPage={prevPage}
            />
            {isLoading
                ? <Loading/>
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
