import React, { useState, useEffect } from 'react';
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "./Feedback.css"

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect(() => {
        fetch('https://secret-dawn-73150.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setFeedbacks(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="my-5">
            <div>
                <h5 className='d-flex justify-content-center c-primary-color fw-bold'>Our Customer Say</h5>
                <h1 className='d-flex justify-content-center'>What Our Customer Say</h1>
                <h1 className='d-flex justify-content-center'>About Us</h1>
            </div>
            <div className='mx-5'>
                <Slider {...settings}>
                    {
                        feedbacks.map(feedback =>
                            <div className='feedback-container' key={feedback._id}>
                                <div style={{ height: "25rem", border: "10px solid #fff", backgroundColor: "#f4f4f4" }} className='text-center shadow py-5 mx-3 my-5 card custom-rounded'>
                                    <div className='d-flex justify-content-center '>
                                        <img src={feedback.img} className='img-rounded card-img-top' alt="..." />
                                    </div>
                                    <div className="card-body text-center">
                                        <h3 className='fw-bold'>{feedback.name}</h3>
                                        <div className='d-flex justify-content-center'>
                                            <ReactStars activeColor="red" size={16} value={feedback.review} edit={false} />
                                        </div>
                                        <p>"{feedback.feedback}"</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;