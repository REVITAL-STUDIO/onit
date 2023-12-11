"use client"
import '@splidejs/splide/dist/css/splide.min.css';
import './property-carousel.css'
import { Splide } from '@splidejs/splide';
import { useEffect } from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const PropertyCarousel = () => {

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
                type: 'fade'

            });
            let thumbnails = new Splide('#thumbnail-slider', {
                arrows: false,
                rewind: true,
                fixedHeight: 78,
                fixedWidth: 130,
                gap: 0,
                isNavigation: true,
                focus: 'center',
                pagination: false,
                cover: true,
                dragMinThreshold: {
                    mouse: 4,
                    touch: 10,
                },
                breakpoints: {
                    640: {
                        fixedWidth: 66,
                        fixedHeight: 38,
                    },
                },
            });
            splide.sync(thumbnails);
            splide.mount();
            thumbnails.mount();
            const prevButton = document.getElementById('prevButton');
            const nextButton = document.getElementById('nextButton');

            if (prevButton && nextButton) {
                prevButton.addEventListener('click', () => splide.go('<'));
                nextButton.addEventListener('click', () => splide.go('>'));
            }


        }
    }, []);
    return (
            <div className='w-[1000px] flex flex-col gap-[1rem] relative'>
                <div id='main-slider' className="splide" aria-label="Splide Basic HTML Example">
                    <div className="splide__track relative">
                        <ul className="splide__list">
                            <li className="splide__slide relative">
                                <div>
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic1.png"
                                />
                                <div className='absolute bottom-[2rem] left-[2rem]'>
                                    <p className='flex justify-center items-center w-[6.5rem] h-[2rem] bg-green70AD40 rounded-full'>780/month</p>
                                    <p className='text-3xl'>4 Bedroom House in Montrose</p>
                                    <p className='flex text-greenC8F3B0 font-semibold ml-[2rem]'><FaLocationDot className='text-green70AD40'/>1234 Fifth Ave, Houston TX 45496</p>
                                </div>
                                </div>
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic2.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic3.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic4.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic5.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic6.png"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Thumbnail Slider */}
                <div id="thumbnail-slider" className="splide flex w-full justify-start">
                    <div className="splide__track w-full mx-[5rem]">
                        <ul className="splide__list w-full flex justify-between">
                            {/* Thumbnails for each slide */}
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic1.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic2.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic3.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic4.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic5.png"
                                />
                            </li>
                            <li className="splide__slide">
                                <Image
                                    className=""
                                    height="600"
                                    width="1000"
                                    alt="agent"
                                    src="/images/property-pic6.png"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='navigation-arrows'>
                    <button id="prevButton"><MdNavigateBefore className='w-[4.5rem] h-[4.5rem] absolute bottom-[2.5rem] left-0 hover:text-green70AD40'/></button>
                    <button id="nextButton"><MdNavigateNext className='w-[4.5rem] h-[4.5rem] absolute bottom-[2.5rem] right-0 hover:text-green70AD40'/></button>
                </div>
            </div>
    )
}


export default PropertyCarousel;