import React from 'react';
import './App';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul className="nav-links">
                <NavLink activeClassName='active' to='/home'>Home</NavLink>
                <NavLink activeClassName='active' to='/html'>Html</NavLink>
                <NavLink activeClassName='active' to='/css'>Css</NavLink>
                <NavLink activeClassName='active' to='/js'>Js</NavLink>
               
                    
                </ul>            
            </nav>
        )
    }
}
export default Nav;
