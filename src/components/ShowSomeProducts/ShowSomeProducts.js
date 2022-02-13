import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../images/watch1.jpg"
import img2 from "../../images/watch2.jpg"
import img3 from "../../images/watch3.jpg"
import img4 from "../../images/watch4.jpg"
import img5 from "../../images/watch5.jpg"
import img6 from "../../images/watch6.jpg"
import Slider from 'react-slick';
import './ShowSomeProducts.css';

const ShowSomeProducts = () => {

    const images = [
        {
            img: img1,
            desc: "FOSSIL"
        },
        {
            img: img2,
            desc: "MASERATI"
        },
        {
            img: img3,
            desc: "TAG HEUER"
        },
        {
            img: img4,
            desc: "TOMMY HILFIGER"
        },
        {
            img: img5,
            desc: "DANIEL WELLINGTON"
        },
        {
            img: img6,
            desc: "ROLEX"
        }
    ]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };



    return (
        <div className='mx-5 pt-lg-5 pb-lg-5 pt-5 pb-3'>
            <Slider {...settings}>
                {
                    images.map((image, index) => (
                        <div key={index}>
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <img className="rounded-circle show-s-p-image mb-4" src={image.img} alt="" />
                                <h6 className='text-center r-show-content'>{image.desc}</h6>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ShowSomeProducts;