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
        <div className='flex gap-[10%] justify-center'>
            <p className='w-[50%] mt-[5%]'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
            <div className='flex flex-col text-center gap-[5vh]'>
                <Image
                    className=" rounded-full"
                    height="250"
                    width="250"
                    alt="logo"
                    src="/images/test1.png"
                />
                <p className='text-greenC8F3B0 text-xl font-semibold'>Alexandra Nguyen</p>
            </div>
        </div>
        ,
        <div className='flex gap-[10%] justify-center'>
            <p className='w-[50%] mt-[5%]'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
            <div className='flex flex-col text-center gap-[5vh]'>
                <Image
                    className=" rounded-full"
                    height="250"
                    width="250"
                    alt="logo"
                    src="/images/test2.png"
                />
                <p className='text-greenC8F3B0 text-xl font-semibold '>David Mensah</p>
            </div>
        </div>,
        <div className='flex gap-[10%] justify-center'>
            <p className='w-[50%] mt-[5%]'>
                “Lorem ipsum dolor sit amet, consectetur adipiscing eSlit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
            <div className='flex flex-col text-center gap-[5vh]'>
                <Image
                    className=" rounded-full"
                    height="250"
                    width="250"
                    alt="logo"
                    src="/images/testimonial3.png"
                />
                <p className='text-greenC8F3B0 text-xl font-semibold'>Alexa Williams</p>
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
        <div className=' flex flex-col w-[1000px] gap-[1rem] relative'>
                <div id='main-slider' className="splide" aria-label="Splide Basic HTML Example">
                    <div className="splide__track relative">
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