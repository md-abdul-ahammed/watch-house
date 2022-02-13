import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';
import { useSelector, useDispatch } from "react-redux";
import {
    getTotals,
} from "../../../features/cartSlice";

const Navigation = () => {
    const { cartTotalQuantity } = useSelector(state => state.cart)
    const { user, logout } = useAuth();

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to='/' className="navbar-brand" ><img className='img-fluid ' width='120px' src="https://i.ibb.co/rfQ88Br/5487305-ai-1.png" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/explore">Explore</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link text-white " to='/cart'>Cart ({cartTotalQuantity})</Link>
                        </li>

                        {/*
                        <li className="nav-item">
                            <Link className="nav-link text-white " to='/contactUs'>Contact US</Link>
                        </li> */}
                    </ul>
                    <div className="d-flex">
                        {
                            user.email ?
                                <>
                                    <Link to='/dashboard' className="nav-link text-white simple-border">Dashboard</Link>
                                    <Link to='/login' onClick={logout} className="nav-link ms-4 button-design">Logout</Link>
                                </>
                                :
                                <>
                                    <Link to='/login' className="nav-link simple-border text-white">Login</Link>
                                    <Link to='/register' className="nav-link simple-border text-white ms-4">Register</Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;