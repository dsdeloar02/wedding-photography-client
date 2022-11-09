import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                <li><Link>Item 1</Link></li>
                <li><Link to='/service/add' >Add Service</Link></li>
                <li><Link to='/login' >Log in</Link></li>
                </ul>
            </div>
            </div>
    );
}

export default Header;
