import { MdMailOutline, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

const Contact = () => {

    return (
        <div className=" font-montserrat overflow-hidden h-full lg:h-screen relative">
                <Image
                    src="/images/houston-city.png"
                    alt="City"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-black opacity-81"></div>
            <div className="flex flex-col  relative z-10  justify-center items-center mt-[2rem]">
                <a href='/'>
                    <IoMdClose className='h-[1.5rem] w-[1.5rem] lg:h-[3rem] lg:w-[3rem] text-white absolute right-[1rem] lgright-[4rem] top-0 hover:text-greenA6CA96 hover:cursor-pointer' />
                </a>
                <h2 className="text-center z-99">Onit Properties</h2>
                <h1 className="text-center text-5xl lg:text-7xl text-greenA6CA96 font-custom-thin">Contact Us</h1>
                <div className="w-screen flex flex-col lg:flex-row gap-[5rem] items-center justify-center mt-[4rem]">
                    <div className="flex flex-col gap-[5rem] relative lg:right-[5rem] ">
                        <div className="flex gap-[1rem]">
                            <div className="flex">
                                <div className="w-[4rem] h-[4rem] bg-white rounded-full z-5 flex justify-center items-center">
                                    <MdMailOutline className="w-[3rem] h-[3rem] absolute z-10 text-black" />
                                </div>
                            </div>
                            <p>
                                <span className="text-green4BC904">Address</span><br />
                                123 Fifth Ave,
                                Houston Texas,
                                45695
                            </p>
                        </div>
                        <div className="flex gap-[1rem]">
                            <div className="flex">
                                <div className="w-[4rem] h-[4rem] bg-white rounded-full z-1 flex justify-center items-center">
                                    <FaPhoneAlt className="w-[2.5rem] h-[2.5rem] text-black z-10 " />
                                </div>
                            </div>
                            <p>
                                <span className="text-green4BC904">Phone</span><br />
                                545-469-4968
                            </p>
                        </div>
                        <div className="flex gap-[1rem]">
                            <div className="flex">
                                <div className="w-[4rem] h-[4rem] bg-white rounded-full z-1 flex justify-center items-center">
                                    <MdLocationOn className="w-[3rem] h-[3rem] absolute text-black z-10" />
                                </div>
                            </div>
                            <p>
                                <span className="text-green4BC904">Email</span><br />
                                support@onit.com
                            </p>
                        </div>
                        <div className="flex gap-[2rem]">
                            <FaFacebookSquare className="w-[3rem] h-[3rem]" />
                            <FaLinkedin className="w-[3rem] h-[3rem]" />
                            <FaInstagram className="w-[3rem] h-[3rem]" />
                        </div>
                    </div>
                    <div>
                        <form className="w-[25rem]  bg-white relative lg:left-[5rem] pt-[2rem] pb-[1.5rem] text-black lg:mb-[5rem] order-1 lg:order-2">
                            <p className="text-2xl text-center text-green-700">Send a Message</p>
                            <div className="flex flex-col gap-[3rem] items-center mt-[3rem] pb-[2rem]">
                                <input className="w-[80%] h-[3rem] border-[2px] border-black pl-[0.5rem] focus:outline-none focus:bg-green-100" placeholder="Full Name" id="name"></input>
                                <input className="w-[80%] h-[3rem] border-[2px] border-black pl-[0.5rem] focus:outline-none focus:bg-green-100" placeholder="Email" id="email"></input>
                                <textarea className="w-[80%] h-[6rem] border-[2px] border-black pl-[0.5rem] focus:outline-none focus:bg-green-100" placeholder="Message"></textarea>
                            </div>
                            <button className="w-[5.5rem] h-[2.5rem] text-black bg-green4BC904 relative  left-[1rem] ">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;