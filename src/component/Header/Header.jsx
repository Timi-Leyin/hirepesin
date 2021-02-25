import React,{Component, setState, useState} from 'react';
import './Header.css' ;
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo';

function Header(){
    let [menuStats, HandleMenuStats]=useState(false);
    const menuHandler=()=>{
           HandleMenuStats(menuStats=!menuStats)
    }
    return(

            <header id="header" className={menuStats && 'active' }>

      <div className="flex">
        <a href="" style={{textDecoration:'none'}}>
          
     <Logo options={
                      {
                          size: '150px',
                              text:true
                      }
                  } />
       
        </a>

        <ul id="nav-links"  className={menuStats && 'active' }>
            <li className="link"><a className={window.location.pathname=='/home' && 'active'  || window.location.pathname=='/' && 'active' } >
            <Link to='/'>Home</Link></a></li>
            <li className="link"><a className={window.location.pathname=='/jobs' && 'active'} >   
            <Link to='/jobs'>Jobs</Link></a></li>
            <li className="link"><a className={window.location.pathname=='/faq' && 'active'}>
            <Link to='/faq'>FAQ</Link></a></li>
            
            
            
            <div id="cta" className="cta-mobile">
            
                <a className="li">
                    <Link to='/register'>
                        <button className="btn btn-active">Register</button>
                    </Link>
                </a>
                <a className="li">
                    <Link to='/login'>
                        <button className="btn btn-no">Login</button>
                    </Link>
                </a>
            </div>
        </ul>

      </div>


        <div id="cta">
            <a href=""><button className="btn btn-active">Register</button></a>
            <a href=""><button className="btn btn-no">Login</button></a>
        </div>

        <div id="hamburger" onClick={
                    menuHandler
                } className={menuStats && 'change'} >
            <div className="bar_1"></div>
            <div className="bar_2"></div>
            <div className="bar_3"></div>
        </div>

    </header>
    )
}

export default Header ;