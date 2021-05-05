import React from "react";
import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./index.css";
import Button from "../Button";

const Header = ({onSearch, disabledInfoPrevious, disabledInfoNext, prevPage, nextPage}) => (
    <header className="Header">
        <img src={logo} className="Header-logo" alt="logo"/>
        <div className={'searchBlock'}>
            <SearchInput onSearch={onSearch}/>
        </div>

        <div className={'changePage'}>
            <Button
                disabled={!disabledInfoPrevious}
                onClick={prevPage}
            >Previous</Button>
            <Button
                disabled={!disabledInfoNext}
                onClick={nextPage}
            >Next</Button>
        </div>

    </header>
);

export default Header;
