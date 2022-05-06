import React from 'react';
import 'tw-elements';

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide relative z-0" data-bs-ride="carousel">
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active relative float-left w-full">
                    <img style={{ height: 'calc(100vh - 80px)' }}
                        src="https://i.ibb.co/WxLZTsf/supermarket-5202138-1920.jpg"
                        className="block w-full object-cover	"
                        alt="..."

                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">All Product Gallery</h5>
                        <p>All Product have gallery and so you can buy product easily.</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img style={{ height: 'calc(100vh - 80px)' }}
                        src="https://i.ibb.co/1dbN07P/family-2923690-1920.jpg"
                        className="block w-full object-cover	"
                        alt="..."

                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Product for Everyone</h5>
                        <p>Every product available here child adult and Everyone.</p>
                    </div>
                </div>
                <div className="carousel-item relative float-left w-full">
                    <img style={{ height: 'calc(100vh - 80px)' }}
                        src="https://i.ibb.co/B4cxLTq/grocery-shopping-5987164-1920.jpg"
                        className="block w-full object-cover	"
                        alt="..."

                    />
                    <div className="carousel-caption hidden md:block absolute text-center">
                        <h5 className="text-xl">Order By Mobile Apps</h5>
                        <p>you can order any product using mobile apps..</p>
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;