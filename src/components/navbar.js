import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className = "navBar">
                <div className="navBar-container">
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
                </div>
            </nav>
        </>
    );
}
export default Navbar;