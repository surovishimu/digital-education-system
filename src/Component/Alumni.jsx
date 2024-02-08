import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "./Review";

const Alumni = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("Testimonial.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div id="testimonials" className="bg-gradient-to-r from-yellow-200 to-yellow-300 p-8 mt-24">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Voices of Success</h1>
            <p className="text-lg text-gray-700 text-center">
                Inspiring Testimonials from Our Successful Students
            </p>
            <div className="slider-container">
                <Slider  {...settings}>
                    {reviews.map(review => (
                        <div key={review.id}>
                            <Review review={review} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Alumni;
