import React from 'react';
import { NavLink } from 'react-router-dom';
import classNavBar from './navBarCss.module.css';



function NavBar (){
    return(
        <nav className={classNavBar.nav}>
            <div className={classNavBar.itemHref}>
               <NavLink to='/profile' activeClassName={classNavBar.active}>Profile</NavLink>
            </div>
            <div className={classNavBar.itemHref}>
               <NavLink to='/dialogs' activeClassName={classNavBar.active}>Masseges</NavLink>
            </div>
            <div className={classNavBar.itemHref}>
               <NavLink to='/news' activeClassName={classNavBar.active}>News</NavLink>
            </div>
            <div className={classNavBar.itemHref}>
               <NavLink to='/music' activeClassName={classNavBar.active}>Music</NavLink>
            </div>
            <div className={classNavBar.itemHref}>
               <NavLink to='/setting' activeClassName={classNavBar.active}>Settings</NavLink>
            </div>
      </nav>
    )
};

export default NavBar;