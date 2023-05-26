import { Link } from 'react-router-dom';

const DashboardNav = () => {

    const active = window.location.pathname;
    return (
        <ul className='nav nav-tabs'>
            
            {/* for buyer */}
            <li className='nav-link'>
                <Link
                    className={`${active === "/dashboard" && "active"}`}
                    to="/dashboard"
                >
                    Your Booking
                </Link>
            </li>

            {/* for seller */}
            <li className='nav-link'>
                <Link
                    className={`${active === "/dashboard" && "active"}`}
                    to="/dashboard/seller"
                >
                    Your Hotels
                </Link>
            </li>

        </ul>
    )
};

export default DashboardNav;