import React from 'react';
import classesForHeader from './HeaderCss.module.css'

function Header () {
    return(
        <header className={classesForHeader.header}>
            <img src='https://www.freelogodesign.org/Content/img/logo-samples/flooop.png'/>
        </header>
    )
};

export default Header;