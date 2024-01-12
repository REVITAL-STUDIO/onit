"use client"
"use client"
import '@splidejs/splide/dist/css/splide.min.css';
import './property-carousel.css'
import React, { ReactNode } from 'react';
import { Splide } from '@splidejs/splide';
import { useEffect } from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface TestimonialCarouselProps {
    slides: ReactNode[];
};

const TestimonialCarousel = () => {

    const testimonialSlides = [
        <div className='flex flex-col w-full lg:flex-row  justify-between items-center'>
            <p className='  w-[90%] sm:w-[80%] text-center lg:w-[60%] mt-[5%] lg:mt-0 mb-[1rem] md:mb-[2rem] lg:mb-0 text-[0.8rem] sm:text-[1rem]'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
                <div className='relative lg:right-[2%] space-y-[2rem] flex flex-col items-center lg:w-[40%]'>
                    <div className='w-[175px] md:w-[210px] lg:w-[60%]'>
                        <Image
                            className=" rounded-full"
                            height="250"
                            width="280"
                            layout='responsive'
                            alt="logo"
                            src="/images/test1.png"
                        />
                    </div>
                    <p className='text-greenC8F3B0 text-xl font-semibold text-center'>Alexandra Nguyen</p>
                </div>
        </div>
        ,
        <div className='flex flex-col w-full lg:flex-row  justify-between items-center'>
            <p className='   w-[90%] sm:w-[80%] text-center lg:w-[60%] mt-[5%] lg:mt-0 mb-[1rem] md:mb-[2rem] lg:mb-0 text-[0.8rem] sm:text-[1rem]'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
                <div className='relative lg:right-[2%] space-y-[2rem] flex flex-col items-center lg:w-[40%]'>
                    <div className='w-[175px] md:w-[210px] lg:w-[60%]'>
                        <Image
                            className=" rounded-full"
                            height="250"
                            width="280"
                            layout='responsive'
                            alt="logo"
                            src="/images/test2.png"
                        />
                    </div>
                    <p className='text-greenC8F3B0 text-xl font-semibold text-center'>Alexandra Nguyen</p>
                </div>
        </div>,
        <div className='flex flex-col w-full lg:flex-row  justify-between items-center'>
        <p className='   w-[90%] sm:w-[80%] text-center lg:w-[60%] mt-[5%] lg:mt-0 mb-[1rem] md:mb-[2rem] lg:mb-0 text-[0.8rem] sm:text-[1rem]'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
        </p>
            <div className='relative lg:right-[2%] space-y-[2rem] flex flex-col items-center lg:w-[40%]'>
                <div className='w-[175px] md:w-[210px] lg:w-[60%]'>
                    <Image
                        className=" rounded-full"
                        height="250"
                        width="280"
                        layout='responsive'
                        alt="logo"
                        src="/images/test3.png"
                    />
                </div>
                <p className='text-greenC8F3B0 text-xl font-semibold text-center'>Alexandra Nguyen</p>
            </div>
    </div>,
        <div className='flex flex-col w-full lg:flex-row  justify-between items-center'>
        <p className='   w-[90%] sm:w-[80%] text-center lg:w-[60%] mt-[5%] lg:mt-0 mb-[1rem] md:mb-[2rem] lg:mb-0 text-[0.8rem] sm:text-[1rem]'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
        </p>
            <div className='relative lg:right-[2%] space-y-[2rem] flex flex-col items-center lg:w-[40%]'>
                <div className='w-[175px] md:w-[210px] lg:w-[60%]'>
                    <Image
                        className=" rounded-full"
                        height="250"
                        width="280"
                        layout='responsive'
                        alt="logo"
                        src="/images/test4.png"
                    />
                </div>
                <p className='text-greenC8F3B0 text-xl font-semibold text-center'>Alexandra Nguyen</p>
            </div>
    </div>

    ]


    useEffect(() => {
        // Run only on the client-side
        if (typeof window !== 'undefined') {
            let splide = new Splide('#main-slider', {
                perPage: 1,
                autoHeight: true,
                autoWidth: false,
                pagination: false,
                rewind: true,
                arrows: false,
                type: 'fade',
                autoplay: true, // Enable autoplay
                interval: 4000,

            });

            splide.mount();
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');

            if (prevButton && nextButton) {
                prevButton.addEventListener('click', () => splide.go('<'));
                nextButton.addEventListener('click', () => splide.go('>'));
            }


        }
    }, []);
    return (
        <div className=' flex w-full'>
            <div id='main-slider' className="splide w-full" aria-label="Splide Basic HTML Example">
                <div className="splide__track relative w-full">
                    <ul className="splide__list">
                        {testimonialSlides.map((slide: React.ReactNode) => (
                            <li className="splide__slide">
                                {slide}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarousel;