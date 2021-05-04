import React from "react";
import Header from "./Header";
import ContentList from "./ContentList";
import {useFetchContent} from "../hooks/useFetchContent";
import "./App.css";

const App = () => {
    const [characters, dataInfo, fetch, nextPage, prevPage] = useFetchContent();

    // console.log(dataInfo)
    return (
        <div className="App">
            <Header
                onSearch={fetch}

                disabledInfoNext={dataInfo.next}
                disabledInfoPrevious={dataInfo.prev}
                nextPage={nextPage}
                prevPage={prevPage}
            />

            <ContentList content={characters}/>
            {/* TODO: Put FetchMoreButton component here */}
        </div>
    );
};

export default App;
