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
        refBtnStatus
    ] = useFetchContent();

    return (
        <div className="App">
            {errStatus
                ?<Alert errorMessage={errMessage}/>
                : null
            }

            <Header
                onSearch={fetchSearch}
                disabledInfoNext={dataInfo.next}
                disabledInfoPrevious={dataInfo.prev}
                nextPage={nextPage}
                prevPage={prevPage}
                onResetSearchSettings={onResetSearchSettings}
                onResearchBtnStatus={refBtnStatus}
            />
            {isLoading
                ? <Loading/>
                : <ContentList content={showCharacters}/>
            }


            <FetchMoreButton
                btnText={'Show more elements'}
                clickFoo={fetchMore}
                disableInfo={showCharacters.length === 20 || isLoading || showCharacters.length > 10 }
            />
        </div>
    );
};

export default App;
