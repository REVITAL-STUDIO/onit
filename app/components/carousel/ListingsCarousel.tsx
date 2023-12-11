"use client"
import '@splidejs/splide/dist/css/splide.min.css';
import React, { ReactNode } from 'react';
import { Splide } from '@splidejs/splide';
import { useEffect } from 'react';
import Image from 'next/image';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

interface ListingsCarouselProps {
    slides: ReactNode[];
    id: string;
  };

const ListingsCarousel: React.FC<ListingsCarouselProps> = ({slides, id}) => {
    
    useEffect(() => {
        // Run only on the client-side
        if (typeof window !== 'undefined') {
            let splide = new Splide(`#${id}`, {
                perPage: 1,
                autoHeight: true,
                autoWidth: false,
                pagination: false,
                rewind: true,
                arrows: false,
                type: 'fade'

            });
            
            splide.mount();
            const prevButton = document.getElementById(`${id}-prevButton`);
            const nextButton = document.getElementById(`${id}-nextButton`);

            if (prevButton && nextButton) {
                prevButton.addEventListener('click', () => splide.go('<'));
                nextButton.addEventListener('click', () => splide.go('>'));
            }


        }
    }, []);
    return (
        <div className=' flex flex-col w-[1000px] gap-[1rem] relative'>
            <div id={id} className="splide visible" aria-label="Splide Basic HTML Example">
                <div className="splide__track relative">
                    <ul className="splide__list">
                        {slides.map((slide: React.ReactNode, index: number) => (
                            <li className="splide__slide" key={index}>
                                {slide}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='navigation-arrows'>
                <button id={`${id}-prevButton`}><MdNavigateBefore className='w-[4.5rem] h-[4.5rem] absolute bottom-[-2rem] left-0 hover:text-green70AD40' /></button>
                <button id={`${id}-nextButton`}><MdNavigateNext className='w-[4.5rem] h-[4.5rem] absolute bottom-[-2rem] right-[5rem] hover:text-green70AD40' /></button>
            </div>
        </div>
    )
}


export default ListingsCarousel;