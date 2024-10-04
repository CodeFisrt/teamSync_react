import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/Employee" className='nav-link'>Employee</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Attendance" className='nav-link'>Attendance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Salary-Advance" className='nav-link'>Advance</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Leaves" className='nav-link'>Leaves</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Salary-Voucher" className='nav-link'>Voucher</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Enquiry" className='nav-link'>Enquiry</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/User" className='nav-link'>User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className='nav-link'>admin</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;