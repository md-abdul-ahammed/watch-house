
import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import img from "../../images/sectionBanner.jpg";
import "./SectionBanner.css"

const SectionBanner = () => {

    return (
        <div className='mx-3 py-5'>
            <div className='row align-items-center'>
                <div className="col-md-6 mb-5">
                    <h2>UK PREMIER STORE <br />
                        FOR WRIST WATCHES</h2>
                    <p className='mt-3 text-muted'>
                        Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vestibulum purus quam scelerisque ut, mollis sed, nonummy id, metus. Vivamus aliquet elit ac nisl.Suspendisse non nisl sit amet velit hendrerit rutrum. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Curabitur ullamcorper ultricies nisi. Sed aliquam ultrices mauris. Nullam cursus lacinia erat
                    </p>
                    <Link className="nav-link p-0"><Button className='button-design fw-bold' variant='contained'>ABOUT US</Button></Link>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <img className='img-fluid shake-animation' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;