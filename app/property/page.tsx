
import { FaBed, FaRegCheckCircle, FaPhoneAlt, FaCamera } from "react-icons/fa";
import { FaShower, FaLocationDot } from "react-icons/fa6";
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosPeople } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdMail } from "react-icons/md";
import { IoPersonCircle, IoChatbox } from "react-icons/io5";
import PropertyCarousel from "../components/carousel/PropertyCarousel";
import { TiArrowBackOutline } from "react-icons/ti";
import Image from "next/image";
const PropertyInfoPage = () => {

    return (
        <div className="flex flex-col gap-[1rem] items-center mb-[5rem] mt-[2rem] relative font-montserrat">
            <a href="/locations" className="absolute top-0 left-[2rem] hover:text-green4BC904 text-xl"><TiArrowBackOutline className=''/>Locations</a>
            {/* property Carousel section */}
            <PropertyCarousel/>
            {/* About row */}
            <div>
                <div className="relative right-[13rem]">
                    <p className="text-green70AD40 font-semibold">About</p>
                    <div className="flex bg-green323E2B gap-[2rem] h-[5rem] px-[0.5rem] w-[40rem] items-center rounded-md">
                        {/* metric cards */}
                        <div className="flex-col w-[6rem] h-[4rem] bg-green5B6D52 rounded-lg ">
                            <p className="ml-[0.4rem] mb-[0.6rem] font-semibold">Bedrooms</p>
                            <div className="flex gap-[3rem]">
                                <FaBed className='w-[1.7rem] h-[1.7rem] relative left-[0.5rem] text-greenC8F0B1' />
                                <p className="text-xl relative right-[0.5rem]">4</p>
                            </div>
                        </div>
                        <div className="flex-col w-[6rem] h-[4rem] bg-green5B6D52 rounded-lg">
                            <p className="pl-[0.4rem] mb-[0.6rem] font-semibold">Baths</p>
                            <div className="flex gap-[3rem]">
                                <FaShower className='w-[1.7rem] h-[1.7rem] relative left-[0.5rem] bottom-[0.2rem] text-greenC8F0B1' />
                                <p className="text-xl relative right-[0.5rem]">2</p>
                            </div>
                        </div>
                        <div className="flex-col w-[8.2rem] h-[4rem] bg-green5B6D52 rounded-lg">
                            <p className="pl-[0.4rem] mb-[0.6rem] font-semibold">Size</p>
                            <div className="flex gap-[2.8rem]">
                                <SlSizeFullscreen className='w-[1.8rem] h-[1.8rem] relative left-[0.5rem] bottom-[0.2rem] text-greenC8F0B1' />
                                <p className="text-xl relative right-[1.2rem]">450<span className="text-sm">ft</span> <span className="absolute text-xs">2</span></p>
                            </div>
                        </div>
                        <div className="flex-col w-[6rem] h-[4rem] bg-green5B6D52 rounded-lg">
                            <p className="pl-[0.4rem] mb-[0.6rem] font-semibold">Capacity</p>
                            <div className="flex gap-[3rem]">
                                <IoIosPeople className='w-[2rem] h-[2rem] relative left-[0.5rem] bottom-[0.2rem] text-greenC8F0B1' />
                                <p className="text-xl relative right-[0.5rem]">8</p>
                            </div>
                        </div>
                        <div className="flex-col w-[7rem] h-[4rem] bg-green5B6D52 rounded-lg">
                            <p className="pl-[0.4rem] mb-[0.6rem] font-semibold">Year Built</p>
                            <div className="flex gap-[2.5rem]">
                                <SlCalender className='w-[1.7rem] h-[1.7rem] relative left-[0.5rem] bottom-[0.2rem] text-greenC8F0B1' />
                                <p className="text-xl relative right-[0.5rem]">2010</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* property info */}
            <div className="flex gap-[7rem]">
                {/* row 1 */}
                <div className="flex flex-col gap-[2rem] ">
                    {/* property descrition */}
                    <div className="flex flex-col gap-[0.5rem]">
                        <p className="text-green70AD40 font-semibold">Description</p>
                        <p className="w-[35rem]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor est, accumsan non tellus suscipit,
                            commodo porttitor augue. In vel elit ipsum. Pellentesque tincidunt arcu consequat, scelerisque quam et,
                            viverra odio. Aenean et interdum urna. Praesent et urna vel libero cursus tristique eu eget diam. Curabitur
                            tincidunt, ipsum vitae interdum ultrices, tellus velit congue lorem, a consequat sapien ligula quis nisi.
                            Donec consequat non metus sit amet iaculis.
                        </p>
                    </div>
                    {/* property amenities */}
                    <div className="flex flex-col gap-[0.5rem]">
                        <p className="text-green70AD40 font-semibold">Included Amenities</p>
                        <ul className="list-none ml-[0.8rem]">
                            <li className="flex gap-[0.3rem] items-center"><FaRegCheckCircle className='text-green728B64 w-[1rem] h-[1rem]' />Pets Allowed</li>
                            <li className="flex gap-[0.3rem] items-center"><FaRegCheckCircle className='text-green728B64 w-[1rem] h-[1rem]' /> Central Cooling/Heating</li>
                            <li className="flex gap-[0.3rem] items-center"><FaRegCheckCircle className='text-green728B64 w-[1rem] h-[1rem]' />Washer & Dryer</li>
                            <li className="flex gap-[0.3rem] items-center"><FaRegCheckCircle className='text-green728B64 w-[1rem] h-[1rem]' />Internet</li>
                            <li className="flex gap-[0.3rem] items-center"><FaRegCheckCircle className='text-green728B64 w-[1rem] h-[1rem]' />Pool</li>
                        </ul>
                    </div>
                    {/* Location Map */}
                    <div className="flex flex-col gap-[1rem]">
                        <p className="text-green70AD40 font-semibold">Location Map</p>
                        <Image
                            className=""
                            height="350"
                            width="350"
                            alt="agent"
                            src="/images/map.png"
                        />
                    </div>
                </div>
                {/* row 2 */}
                <div className="flex flex-col items-center gap-[5rem] mt-[3rem]">
                    {/* agent section */}
                    <div className="flex gap-[1rem]">
                        <div className="rounded-full ">
                            <Image
                                className=""
                                height="150"
                                width="150"
                                alt="agent"
                                src="/images/agent.png"
                            />
                        </div>
                        {/* agent contact */}
                        <div className="flex flex-col gap-[0.3rem]">
                            <p className="text-grayA1A1A1 text-sm font-semibold">Leasing Agent</p>
                            <p className="">Jacob Smith</p>
                            <div className="flex gap-[1.2rem] text-xs mb-[0.4rem]">
                                <p>Office</p>
                                <p className="flex items-center gap-[0.3rem]"><FaPhoneAlt className='w-[1rem] h-[1rem] text-greenC8F0B1' /> 454-454-454</p>
                            </div>
                            <div className="flex gap-[1rem] text-xs mb-[0.4rem]">
                                <p>Mobile</p>
                                <p className="flex items-center gap-[0.3rem]"><FaPhoneAlt className='w-[1rem] h-[1rem] text-greenC8F0B1' /> 454-454-454</p>
                            </div>
                            <div className="flex gap-[1.5rem] text-xs mb-[0.4rem]">
                                <p>Email</p>
                                <p className="flex items-center gap-[0.3rem]"><MdMail className='w-[1rem] h-[1rem] text-greenC8F0B1' /> jacobs.smith@onit.com</p>
                            </div>
                        </div>
                    </div>
                    {/* contact form */}
                    <div className="flex flex-col gap-[0.3rem]">
                        <p className="text-green70AD40 text-center font-semibold mb-[0.3rem]">Property Inquiry</p>
                        <form className="flex flex-col items-center gap-[0.8rem] h-[26.5rem] w-[21rem] pt-[1rem] bg-green728B64 rounded-lg ">
                            <div className="relative">
                                <IoPersonCircle className='absolute w-[2.2rem] h-[2.2rem] left-[0.5rem] bottom-[0.3rem] text-grayA1A1A1' />
                                <span className="absolute bottom-[0.4rem] left-[3rem] w-[13rem] h-[0.05rem] bg-grayA1A1A1 opacity-25"></span>
                                <input type='text' placeholder='Name' className="h-[3rem] w-[18rem] rounded-full text-black pl-[3rem] text-xs focus:outline-none focus:bg-green-100"></input>
                            </div>
                            <div className="relative">
                                <MdMail className='absolute w-[1.8rem] h-[2.2rem] left-[0.7rem] bottom-[0.3rem] text-grayA1A1A1' />
                                <span className="absolute bottom-[0.4rem] left-[3rem] w-[13rem] h-[0.05rem] bg-grayA1A1A1 opacity-25"></span>
                                <input type='text' placeholder='Email' className="h-[3rem] w-[18rem] rounded-full text-black pl-[3rem] text-xs focus:outline-none focus:bg-green-100"></input>
                            </div>
                            <div className="relative">
                                <FaPhoneAlt className='absolute w-[1.5rem] h-[2.2rem] left-[0.9rem] bottom-[0.3rem] text-grayA1A1A1' />
                                <span className="absolute bottom-[0.4rem] left-[3rem] w-[13rem] h-[0.05rem] bg-grayA1A1A1 opacity-25"></span>
                                <input type='text' placeholder='Phone' className="h-[3rem] w-[18rem] rounded-full text-black pl-[3rem] text-xs focus:outline-none focus:bg-green-100"></input>
                            </div>
                            <div className="relative">
                                <IoChatbox className='absolute w-[1.8rem] h-[1.8rem] left-[0.7rem] top-[0.3rem] text-grayA1A1A1' />
                                <textarea placeholder='Hello, Im interested in []' className="h-[12rem] w-[18rem] rounded-xl text-xs pl-[0.8rem] pt-[2.2rem] text-black resize-none focus:outline-none focus:bg-green-100"></textarea>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default PropertyInfoPage;