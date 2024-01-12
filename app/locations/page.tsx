import Image from 'next/image'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Nav from '../components/nav/Nav';
import ListingsCarousel from '../components/carousel/ListingsCarousel';

const Locations = () => {
    //listing slides
    const heightsSlides = [
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px] '>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/heights1.png"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing2"
                    src="/images/heights2.jpg"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%]  gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left '>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing3"
                    src="/images/heights3.jpg"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left:'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,]

    //Montrose listing slides
    const montroseSlides = [
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/montrose1.png"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%]  gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing2"
                    src="/images/montrose2.webp"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/montrose3.jpg"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,]
    //Katy listing slides
    const katySlides = [
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/katy1.png"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/katy2.jpg"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[2rem] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,
        <div className='relative listing flex flex-col items-center lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[6%]'>
            <div className='w-[350px] md:w-[450px] lg:w-[700px]'>
                <Image
                    className=""
                    height="700"
                    width="700"
                    alt="listing1"
                    src="/images/katy3.jpg"
                    layout='responsive'
                />
            </div>
            <div className='flex flex-col text-xs  w-[80%] lg:w-[45%] gap-[1rem] md:gap-[2rem] lg:gap-[10%] items-center text-left'>
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <a href='/property' className=' bg-greenC8F3B0 text-black text-lg font-semibold w-[11rem] h-[3rem] rounded-2xl hover:bg-grayA1A1A1 flex justify-center items-center'>Learn More</a>
            </div>
        </div>,]



    return (
        <div className='relative overflow-hidden font-montserrat'>
            <Nav />
            <a href="/">
                <div className='w-[150px] md:w-[230px] absolute top-0 right-0'>
                    <Image
                        className=""
                        height="1"
                        width="1"
                        layout='responsive'
                        alt="logo"
                        src="/images/logo.png"
                    />
                </div>
            </a>
            <h1 className='relative text-greenC8F3B0 font-bold text-5xl lg:text-6xl text-center lg:text-left lg:mb-[10rem] lg:ml-[8rem] top-[10rem]'>Explore Our Properties</h1>
            <main className='pt-[10rem] lg:ml-[7rem] mt-[5rem] relative'>

                {/* The Heights listings */}
                <section className='relative  mb-[10rem] w-full'>
                    <div className='max-w-[75%] mx-auto'>
                        <h2 className='text-grayA1A1A1 font-bold text-3xl lg:text-5xl mb-[5%] ml-[1rem] lg:ml-0'>The Heights</h2>
                        <ListingsCarousel slides={heightsSlides} id="heights">
                        </ListingsCarousel>
                    </div>
                </section>
                {/* Montrose listings */}
                <section className='relative   mb-[10rem]'>
                    <div className='max-w-[75%] mx-auto'>
                        <h2 className='text-grayA1A1A1 font-bold text-3xl lg:text-5xl mb-[5%] ml-[1rem] lg:ml-0'>Montrose</h2>
                        <ListingsCarousel slides={montroseSlides} id="montrose">
                        </ListingsCarousel>
                    </div>
                </section>
                {/* Katy listings */}
                <section className='relative   mb-[10rem]'>
                    <div className='max-w-[75%] mx-auto'>
                        <h2 className='text-grayA1A1A1 font-bold text-3xl lg:text-5xl mb-[5%] ml-[1rem] lg:ml-0'>Katy</h2>
                        <ListingsCarousel slides={katySlides} id="katy">
                        </ListingsCarousel>
                    </div>
                </section>
                <footer className=' w-full mx-auto lg:w-[85%] flex flex-col px-[0.8rem] md:px-[1.5rem] lg:px-0   border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[4rem] lg:gap-[10rem]'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col text-3xl md:text-4xl lg:text-5xl gap-[4rem] md:gap-[3.5rem]'>
                            <a href='' className='hover:text-greenC8F3B0'>Locations +</a>
                            <a href='' className='hover:text-greenC8F3B0'>Owners +</a>
                            <a href='' className='hover:text-greenC8F3B0'>Tenants +</a>
                        </div>
                        <div className='flex flex-col text-xl gap-[1.5rem] text-center'>
                            <a href='' className='hover:text-greenC8F3B0'>Contact</a>
                            <a href='' className='hover:text-greenC8F3B0'>Pay Rent</a>
                            <a href='' className='hover:text-greenC8F3B0'>Services</a>
                            <a href='' className='hover:text-greenC8F3B0'>Residents</a>
                            <a href='' className='hover:text-greenC8F3B0'>Maintainence</a>
                        </div>
                    </div>
                    <div className='flex justify-center md:justify-end relative'>
                        <Image
                            className="relative right-[-1.5%] bottom-[20%]"
                            height="200"
                            width="200"
                            alt="logo"
                            src="/images/logo.png"
                        />
                    </div>
                </footer>
            </main>
        </div>
    )
}

export default Locations;