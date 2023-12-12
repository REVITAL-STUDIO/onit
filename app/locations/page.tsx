import Image from 'next/image'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Nav from '../components/nav/Nav';
import ListingsCarousel from '../components/carousel/ListingsCarousel';

const Locations = () => {
    //listing slides
    const heightsSlides = [
        <div className='relative listing flex gap-[6%]'>
            <Image
                className=""
                height="700"
                width="700"
                alt="listing1"
                src="/images/heights1.png"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing2"
                src="/images/heights2.jpg"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing3"
                src="/images/heights3.jpg"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing1"
                src="/images/montrose1.png"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing2"
                src="/images/montrose2.webp"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing3"
                src="/images/montrose3.jpg"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing1"
                src="/images/katy1.png"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing2"
                src="/images/katy2.jpg"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative listing flex gap-[6%]'>

            <Image
                className=""
                height="700"
                width="700"
                alt="listing3"
                src="/images/katy3.jpg"
            />
            <div className='flex flex-col text-sm w-[25%] gap-[10%]'>
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
        <div className='relative font-montserrat'>
            <Nav/>
            <a href="/">
                <Image
                    className="absolute top-0 right-0"
                    height="230"
                    width="230"
                    alt="logo"
                    src="/images/logo.png"
                />
            </a>
            <h1 className='relative text-greenC8F3B0 font-bold text-6xl  mb-[20vh] ml-[20vh] top-[10rem]'>Explore Our Properties</h1>
            <main className='pt-[15vh] ml-[19vw] mt-[10vh]'>
                
                {/* The Heights listings */}
                <section className='relative h-[100vh] mt-[10vh] mb-[15vh]'>
                    <h2 className='text-grayA1A1A1 font-bold text-5xl mb-[5%]'>The Heights</h2>
                    <ListingsCarousel slides={heightsSlides} id="heights">
                    </ListingsCarousel>
                </section>
                {/* Montrose listings */}
                <section className='relative h-[100vh] mb-[15vh]'>
                    <h2 className='text-grayA1A1A1 font-bold text-5xl mb-[5%]'>Montrose</h2>
                    <ListingsCarousel slides={montroseSlides} id="montrose">
                    </ListingsCarousel>
                </section>
                {/* Katy listings */}
                <section className='relative h-[100vh] mb-[15vh]'>
                    <h2 className='text-grayA1A1A1 font-bold text-5xl mb-[5%]'>Katy</h2>
                    <ListingsCarousel slides={katySlides} id="katy">
                    </ListingsCarousel>
                </section>
                <footer className='h-[100vh] w-[86%] flex flex-col   border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[40%]'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col text-5xl gap-[8vh]'>
                            <a href='' className='hover:text-greenC8F3B0'>Locations +</a>
                            <a href='' className='hover:text-greenC8F3B0'>Owners +</a>
                            <a href='' className='hover:text-greenC8F3B0'>Tenants +</a>
                        </div>
                        <div className='flex flex-col text-xl gap-[15%] text-center'>
                            <a href='' className='hover:text-greenC8F3B0'>Contact</a>
                            <a href='' className='hover:text-greenC8F3B0'>Pay Rent</a>
                            <a href='' className='hover:text-greenC8F3B0'>Services</a>
                            <a href='' className='hover:text-greenC8F3B0'>Residents</a>
                            <a href='' className='hover:text-greenC8F3B0'>Maintainence</a>
                        </div>
                    </div>
                    <div className='flex justify-between relative'>
                        <div className='flex'>
                            <div className='flex items-center justify-center h-[4rem] w-[7rem] border-[1px] border-greenC8F3B0 rounded-l-full hover:cursor-pointer hover:bg-greenC8F3B0'>
                                SIGN UP
                            </div>
                            <div className='flex items-center justify-center h-[4rem] w-[7rem] border-[1px] border-l-[0px] border-greenC8F3B0 rounded-r-full hover:cursor-pointer hover:bg-greenC8F3B0'>
                                SIGN UP
                            </div>
                        </div>

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