import React from 'react';
import "./Discover.css";
import img1 from "../../images/women-watch.jpg"
import img2 from "../../images/happy-women.jpg"
import img3 from "../../images/boy-watch.jpg"
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Discover = () => {


    const settings = {
        infinite: true,
        centerMode: true,
        autoplay: true,
        dots: true,
        initialSlide: 1,
        centerPadding: "250px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    centerMode: false,
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    centerMode: false,
                }
            }
        ]
    };




    const services = [
        {
            img: img1,
            desc: "INTRODUCE AN EVOLUTION OF MILITARY STYLE",
            btn_name: "SHOP NOW"
        },
        {
            img: img2,
            desc: "INTRODUCE AN EVOLUTION OF MILITARY STYLE",
            btn_name: "SHOP NOW"
        },
        {
            img: img3,
            desc: "INTRODUCE AN EVOLUTION OF MILITARY STYLE",
            btn_name: "SHOP NOW"
        },
    ]


    return (
        <div className='discover-container'>
            <div className='py-5'>
                <div className='py-2'>
                    <div>
                        <h4 className='text-center'>
                            Discover our collections
                        </h4>
                    </div>
                    <div className='mx-5 discover-description-area'>
                        <Slider {...settings}>
                            {/* <Slider autoplay infinite initialSlide={1} speed={500} dots slidesToScroll={1} slidesToShow={1} centerPadding='250px' centerMode> */}
                            {
                                services.map((service, index) => (
                                    <div key={index} className="ps-lg-4 pe-lg-4 pb-lg-4">
                                        <div className="py-5">
                                            <div className='dis-img-area d-flex justify-content-center align-items-center'>
                                                <img style={{ width: "100%" }} src={service.img} alt="" />
                                                <div className='dis-desc-area shadow-sm p-3 bg-body d-flex justify-content-center flex-column align-items-center rounded'>
                                                    <h5 className='text-center'>{service.desc}</h5>
                                                    <Link className="nav-link"><Button className='button-design fw-bold' variant='contained'>{service.btn_name}</Button></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;