import React from 'react'
import DashboardNav from '../components/DashboardNav';
import ConnectNav from '../components/ConnectNav';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const DashboardSeller = () => {

    const {auth}=useSelector((state)=>({...state}));

    const connected = () => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>Your Hotels</h2>
                </div>
                <div className="col-md-2">
                    <Link to="/hotels/new" className="btn btn-primary">
                        + Add New
                    </Link>
                </div>
            </div>
        </div>
        )
    };

    const notConnected = () => {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10">
                    <h2>Connect with Stripe</h2>
                </div>
            </div>
        </div>
        )
    }

    return (
        <>
            <div className='container-fluid bg-secondary p-5'>
                <ConnectNav />
            </div>

            <div className='container-fluid p-4'>
                <DashboardNav />
            </div>

            {auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.charges_enabled
                ? connected()
                : notConnected()
            }
        </>
    )
};

export default DashboardSeller;