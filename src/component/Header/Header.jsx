import Rect,{Component, setState, useState} from 'react';
import './Header.css' ;
import Register from '../../pages/Register/Register'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Logo from '../Logo/Logo';

function Header(){
    let [menuStats, HandleMenuStats]=useState(false);
    const menuHandler=()=>{
           HandleMenuStats(menuStats=!menuStats)
    }
    return(
 <Router>
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
            <li className="link"><a className='active' href="">Home</a></li>
            <li className="link"><Link to="/jobs">Jobs</Link></li>
            <li className="link"><Link to="/faq">Faq</Link></li>
            <div id="cta" className="cta-mobile">
                <Link to="/register" className="li"><button className="btn btn-active">Register</button></Link>
                <Link to="/login" className="li"><button className="btn btn-no">Login</button></Link>
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
    <Route path='/register'>
        <Register />
    </Route>
 </Router>
    )
}

export default Header ;