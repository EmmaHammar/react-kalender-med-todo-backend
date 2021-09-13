import './Header.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";


function Header (props) {

    return(
        <>
            <Router>
                <header>
                        <h1 id='logoWrapper'>
                            <Link to={'/'}>
                                <span id='span-emma'>EMMA</span> 
                                <span id='span-hammar'>HAMMAR</span>
                            </Link>
                        </h1>
                    <nav>
                        <ul id='nav-ul'>
                            <li className='nav-li'>
                                <Link to={'/cv'}>CV</Link>
                            </li>
                            <li className='nav-li'>
                                <Link to={'/portfolio'}>PORTFOLIO</Link>
                            </li>
                            <li className='nav-li'>
                                <Link to={'/kontakt'}>KONTAKT</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <div className='underline' id='underline-top'></div>
                <div className='underline'></div>
            </Router>
        </>
    )
} 

export default Header;