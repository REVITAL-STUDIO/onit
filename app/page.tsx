"use client"
import './globals.css';
import Image from 'next/image'
import Select from 'react-select'
import Nav from './components/nav/Nav'
import { GoMail } from "react-icons/go";
import TestimonialCarousel from './components/carousel/TestimonialCarousel';
export default function Home() {
  const interestOptions = [
    { value: 'Apartments', label: 'Apartments' },
    { value: 'Townhomes', label: 'Townhomes' },
    { value: 'Single-family homes', label: 'homes' },
    { value: 'Duplexes', label: 'Duplexes' }
  ]
  interface selectStyles {
    control?: (provided: any, state: any) => any;
  }
  const selectStyles: selectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgb(220 252 231 / var(--tw-bg-opacity))' : 'white',
      borderColor: state.isFocused ? 'rgb(16, 185, 129)' : provided.borderColor,
      outline: state.isFocused ? 'none' : provided.outline,
      // Add more custom styles as needed
    }),
  };
  return (
    <div className='relative overflow-hidden font-montserrat'>
      <Nav />
      <a href="/">
        <div className='w-[150px] md:w-[230px]  absolute top-0 right-0'>
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

      <main className='lg:ml-[9rem]'>
        {/* Hero Section */}
        <section className=' relative mt-[5rem] lg:mt-0 mb-[4rem]'>
          <h1 className='text-[1.4rem] md:text-[3rem] w-full relative  top-[2rem] md:top-[3.5rem] lg:text-[2.1rem] font-semibold lg:max-w-1/2 text-center lg:absolute lg:left-[20%] lg:top-[30%]'> HOUSTON'S <span className='text-greenC8F3B0 text-7xl' >#1</span> <span className='text-greenC8F3B0'>PROPERTY<br />MANAGEMENT GROUP</span></h1>
          <div className='w-[165px] md:w-[370px] lg:w-[43%] relative top-[3rem] md:top-[4.5rem] mx-auto lg:mx-0 lg:top-20 lg:left-[65] z-10'>
            <Image
              className="  "
              height="550"
              width="550"
              alt="texas"
              src="/images/texas.png"
              layout='responsive'
            />
          </div>
          <Image
            className="z-5 opacity-75"
            height="1"
            width="1230"
            alt="houston"
            src="/images/houston.png"
          />
        </section>

        {/* Why ONIT Section */}
        <section className='py-20'>
          <div className='flex justify-start md:justify-between md:px-8 lg:pl-20 lg:pr-14'>
            <div className='md:w-[250px] lg:w-[30%]'>
            <Image
              className="hidden md:block "
              height="1"
              width="340"
              alt="logo"
              src="/images/condo.png"
              layout='responsive'
            />
            </div>
            <div className='flex w-full flex-col md:w-[60%] gap-[5rem] md:gap-[5rem] lg:gap-[8rem]'>
              <div className='w-full  font-semibold'>
                <h2 className='text-center md:text-right mb-[1rem] md:mb-0 text-4xl'>WHY <span className='text-greenC8F3B0'>ONIT?</span></h2>
                <p className='text-left md:text-right px-[1.5rem] md:px-0'>At Onit Property Management, we recognize the challenges associated with owning a rental property.
                  Our commitment is to alleviate the burdens on property owners while ensuring a superior quality-of-life
                  experience for our tenants. We go above and beyond to streamline the entire process, making property management
                  a seamless and rewarding venture for our clients.
                </p>
              </div>
              <div className='w-full font-semibold'>
                <h2 className='text-center text-greenC8F3B0 font-semibold text-2xl mb-[1rem] md:mb-0'>SATISFACTION GUARANTEE</h2>
                <p className='text-center'>
                  We guarantee that you will be 100%<br />satisfied with our overall level of service.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Consultation Section */}
        <section className=' flex flex-col items-center gap-[1rem] py-20'>
          <p className='text-greenC8F3B0 text-md font-semibold text-center px-[0.5rem] lg:px-0'>
            Loved by people who put their clients at the center of their property owner journey.
          </p>
          {/* consultation container */}
          <div className='flex relative gap-2 lg:gap-4 w-[90%] max-w-[330px] sm:min-w-[330px] sm:max-w-[62%] md:w-[58%] lg:w-[55%] justify-around py-4 px-3 lg:py-8 md:px-4 lg:px-8 bg-gradient-to-b from-greenC8F3B0 to-rgba-200-243-176-10 rounded-3xl border-solid border-white border-[1px] '>
            <div className='flex flex-col w-2/3 space-y-4'>
              <div className=''>
                <p className='text-xl md:text-2xl lg:text-3xl font-bold'>GET STARTED!</p>
                <p className='text-[8px] md:text-[13px] lg:text-[65%] w-full lg:w-[90%]'>
                  We understand how tough the entire process of owning a rental property can be, and we do whatever it takes to reduce
                  the burden on the property owner while providing a high quality-of-life experience for our tenants. Please give us a call
                  to learn more about what we can do for you!
                </p>
              </div>
              <div className='relative w-[11rem] py-2 md:w-[68%] md:py-4 lg:w-[66%]   flex bg-gray3E3E3E shadow-consultationButton rounded-full items-center justify-center hover:bg-black hover:cursor-pointer'>
                <h2 className='text-[0.7rem] lg:text-[0.7rem]'>SCHEDULE A CONSULTATION</h2>
              </div>
            </div>
            <div className='w-[120px] md:w-[170px] lg:w-[32%]'>
            <Image
              className=" rounded-full"
              height="1"
              width="200"
              alt="logo"
              src="/images/family.png"
              layout='responsive'
            />
            </div>
          </div>
        </section>
        {/* Mail list section */}
        <section className=' flex flex-col lg:flex-row justify-start items-center px-[2rem] py-[2rem] lg:px-[4.5rem] gap-[2rem] lg:gap-[4.5rem] lg:py-20'>
          <form className='bg-green96B684  w-[100%] min-w-[320px] max-w-[60%] sm:w-[70%]  md:w-[50%] lg:w-1/3 pt-[1%] rounded-[20px] pb-6 order-2 lg:order-1'>
            <GoMail className='w-[3rem] h-[3rem] text-black ml-auto mr-auto' />
            <p className='text-black text-xl font-semibold text-center'>Newsletter</p>
            <p className='text-black text-xl font-semibold text-center'>Stay Informed with Onit</p>
            <div className='pt-4 ml-[10%] flex flex-col gap-[0.5rem] md:gap-[1.5rem] lg:gap-[2rem] text-black font-semibold'>
              {/* name input */}
              <div className='flex flex-col'>
                <label>Name</label>
                <input className='w-[88%] py-2 border-[2px] rounded-[5px] border-grayA1A1A1 pl-[5px] focus:outline-none focus:bg-green-100 focus:placeholder-transparent' type='text' id='firstName' placeholder='full name'></input>
              </div>
              {/* email input */}
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input className='w-[88%] py-2 border-[2px]  rounded-[5px] border-grayA1A1A1 pl-[5px] focus:outline-none focus:bg-green-100 focus:placeholder-transparent' type='text' id='email' placeholder='mail@example.com'></input>
              </div>
              {/* interests input */}
              <div>
                <label className='text-sm'>What Properties are you Interested in?</label>
                <Select isMulti options={interestOptions} styles={selectStyles} className='w-[88%] h-[2rem  outline-none ' />
              </div>
            </div>
            <div className='text-center mt-[8%]'>
              <button className='py-2 w-[9.5rem] bg-green70AD40 text-white hover:bg-gray3E3E3E  rounded-full font-semibold shadow-mailListButton' type='submit'>Subscribe</button>
            </div>
          </form>
          <div className=' text-center flex flex-col justify-center gap-[2%] '>
            <h2 className='text-greenC8F3B0 text-3xl font-semibold'>Join Our Mail List</h2>
            <p className='text-xl'>
              Be the first to know about new listings and special offers!
            </p>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className='w-full flex flex-col items-center lg:items-start py-10 lg:pl-[4.5rem] mb-[3rem]'>
          <h1 className='text-3xl font-semibold text-greenC8F3B0 w-full text-center lg:w-[10rem] '>Testimonials</h1>
          <div className='w-full sm:mx-auto mx-auto'>
            <TestimonialCarousel />
          </div>
        </section>
        <footer className=' px-[0.8rem] md:px-[1.5rem] lg:px-0 w-full lg:w-[85%] flex flex-col  gap-[4rem] lg:gap-[10rem] border-t-4 border-t-greenC8F3B0 pt-[8%]  lg:ml-[5rem]'>
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
