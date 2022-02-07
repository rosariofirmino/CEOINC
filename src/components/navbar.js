import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";
import './navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className = "navbar">
                <div className="navbar-container">
                    <Link to="/" className = "navbar-logo">
                        CEO Inc
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className = "nav-item">
                            <Link to='/ourexpertise' className = "nav-links" onClick={closeMobileMenu}>
                                Our Expertise
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/aboutus' className = "nav-links" onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/recognitions' className = "nav-links" onClick={closeMobileMenu}>
                                Recognitions
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/team' className = "nav-links" onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='/contact' className = "nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className = "nav-item">
                            <Link to='https://ceoinc.com/career-portal/#/jobs' className = "nav-links-mobile" onClick={closeMobileMenu}>
                                Search Jobs
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SEARCH JOBS</Button>}
                </div>
            </nav>
        </>
    );
}
export default Navbar;