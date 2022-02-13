import React from 'react';
import "./NewsLetter.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import img1 from "../../images/watch7.png"
import img2 from "../../images/watch8.png"
import img3 from "../../images/watch9.png"
import img4 from "../../images/watch10.png"
import img5 from "../../images/watch11.png"
import img6 from "../../images/watch12.png"
import img7 from "../../images/watch13.png"
import brandLogo1 from "../../images/brandLogo1.png"
import brandLogo2 from "../../images/brandLogo2.png"
import brandLogo3 from "../../images/brandLogo3.png"
import brandLogo4 from "../../images/brandLogo4.png"
import brandLogo5 from "../../images/brandLogo5.png"


const NewsLetter = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7];
    const brandLogos = [brandLogo1, brandLogo2, brandLogo3, brandLogo4, brandLogo5, brandLogo3]

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div className='mx-5'>
            <div className='d-flex py-5 flex-column align-items-center justify-content-center'>
                <h5>STAY IN THE LOOP</h5>
                <p className="text-muted text-center">
                    Be the first to know about new arrivals, deals & the best price
                </p>
                <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    <input placeholder='Email address' className='newsletter-input' type="text" />
                    <button className='newsletter-btn'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='py-4'>
                <Slider {...settings} >
                    {
                        images.map(image => <img src={image} alt="" />)
                    }
                </Slider>
            </div>
            <div className='py-3'>
                <Slider {...settings1} >
                    {
                        brandLogos.map(img => (
                            <div className='d-flex justify-content-center'>
                                <img className='img-fluid' src={img} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default NewsLetter;