import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import { testimonials } from "../../assets/data/testimonials";
import { Fade } from "react-awesome-reveal";

export const Testimonials = () => {
    return (
        <section id="testimonials">
            <Fade delay={0.1} cascade damping={0.1} className="numbered-heading">
                See What They Say About Me
            </Fade>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
                {testimonials.map((testimonial, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial-wrapper">
                                <div className="testimonial-img-wrapper">
                                    <img src={testimonial.img} alt="face" />
                                </div>
                                <div className="testimonial-detail-wrapper">
                                    <div className="testimonial-detail">
                                        <div className="testimonial-name">{testimonial.name}</div>
                                        <div className="testimonial-role">{testimonial.role}</div>
                                    </div>
                                    <div className="testimonial-company">{testimonial.company}</div>
                                </div>
                                <div className="testimonial-comment">{testimonial.comment}</div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};
