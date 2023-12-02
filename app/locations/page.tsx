import Image from 'next/image'

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Locations = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='relative'>
            <nav className='fixed top-0 h-[90vh] w-[12vw] bg-greenC8F3B0 text-black font-semibold flex flex-col justify-between py-10 pl-3'>
                <a href="">Login </a>
                <div className='flex flex-col'>
                    <a href="">Locations</a>
                    <a href="">Tenants +</a>
                    <a href="">Owners +</a>
                </div>
                <a href="">Contact</a>
            </nav>
            <Image
                className="absolute top-0 right-0"
                height="230"
                width="230"
                alt="logo"
                src="/images/logo.png"
            />
            <main className='pt-[15vh] ml-[17vw]'>
                {/* The Heights listings */}
                <section className='relative h-[100vh]'>
                    <h2 className='text-greenC8F3B0 font-bold text-5xl mb-[5%]'>The Heights</h2>
                            {/* Slide 1 */}
                        <div className='relative listing flex gap-[6%]'>
                            <Image
                                className=""
                                height="700"
                                width="700"
                                alt="listing1"
                                src="/images/heights1.png"
                            />
                            <div className='flex flex-col text-sm w-[20%] gap-[10%]'>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                                <button className='ml-auto mr-auto bg-greenC8F3B0 text-black text-lg font-semibold w-[80%] h-[10%] rounded-2xl'>Learn More</button>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className='relative listing flex gap-[6%]'>
                            <Image
                                className=""
                                height="700"
                                width="700"
                                alt="listing1"
                                src="/images/heights1.png"
                            />
                            <div className='flex flex-col text-sm w-[20%] gap-[10%]'>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                </p>
                                <button className='ml-auto mr-auto bg-greenC8F3B0 text-black text-lg font-semibold w-[80%] h-[10%] rounded-2xl'>Learn More</button>
                            </div>
                        </div>
                            

                    <IoIosArrowBack className='absolute bottom-[10%] left-[-2%] w-[6%] h-[15%] ' />
                    <IoIosArrowForward className='absolute bottom-[10%] right-[12%] w-[6%] h-[15%]' />
                </section>
                {/* Montrose listings */}
                <section className='relative h-[100vh]'>
                    <h2 className='text-greenC8F3B0 font-bold text-5xl mb-[5%]'>Montrose</h2>
                    <div className='relative listing flex gap-[6%]'>
                        <Image
                            className="relative left-[-2%]"
                            height="700"
                            width="700"
                            alt="listing1"
                            src="/images/montrose1.png"
                        />
                        <div className='flex flex-col text-sm w-[20%] gap-[10%]'>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <button className='ml-auto mr-auto bg-greenC8F3B0 text-black text-lg font-semibold w-[80%] h-[10%] rounded-2xl'>Learn More</button>
                        </div>
                    </div>
                    <IoIosArrowBack className='absolute bottom-[10%] left-[-2%] w-[6%] h-[15%] ' />
                    <IoIosArrowForward className='absolute bottom-[10%] right-[12%] w-[6%] h-[15%]' />
                </section>
                {/* Katy listings */}
                <section className='relative h-[100vh]'>
                    <h2 className='text-greenC8F3B0 font-bold text-5xl mb-[5%]'>Katy</h2>
                    <div className='relative listing flex gap-[6%]'>
                        <Image
                            className=""
                            height="700"
                            width="700"
                            alt="listing1"
                            src="/images/katy1.png"
                        />
                        <div className='flex flex-col text-sm w-[20%] gap-[10%]'>
                            <p>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </p>
                            <button className='ml-auto mr-auto bg-greenC8F3B0 text-black text-lg font-semibold w-[80%] h-[10%] rounded-2xl'>Learn More</button>
                        </div>
                    </div>                        
                    <IoIosArrowBack className='absolute bottom-[10%] left-[-2%] w-[6%] h-[15%] ' />
                    <IoIosArrowForward className='absolute bottom-[10%] right-[12%] w-[6%] h-[15%]' />
                </section>
                <footer className='mt-[5%] h-[100vh] w-[87%] flex flex-col  mr-auto border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[40%]'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col text-5xl gap-[8vh]'>
                            <a href=''>Locations +</a>
                            <a href=''>Owners +</a>
                            <a href=''>Tenants +</a>
                        </div>
                        <div className='flex flex-col text-xl gap-[15%] text-center'>
                            <a href=''>Contact</a>
                            <a href=''>Pay Rent</a>
                            <a href=''>Services</a>
                            <a href=''>Residents</a>
                            <a href=''>Maintainence</a>
                        </div>
                    </div>
                    <div className='flex justify-between relative'>
                        <div className='relative flex h-[55%] w-[25%] items-center justify-center gap-[20%] border-[1px] border-greenC8F3B0 rounded-full'>
                            <p>SIGN UP</p>
                            <span className='absolute h-[99%] w-[1px] bg-greenC8F3B0'></span>
                            <p>LOGIN</p>
                        </div>
                        <Image
                            className="relative right-[-1.5%] bottom-[33%]"
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