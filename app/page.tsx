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
        <Image
          className="absolute top-0 right-0"
          height="230"
          width="230"
          alt="logo"
          src="/images/logo.png"
        />
      </a>

      <main className='ml-[9rem]'>
        {/* Hero Section */}
        <section className=' relative mb-[4rem]'>
          <h1 className='text-4xl font-semibold max-w-1/2 text-center absolute right-[5rem] top-[30%]'> HOUSTON'S <span className='text-greenC8F3B0 text-7xl' >#1</span> <span className='text-greenC8F3B0'>PROPERTY<br />MANAGEMENT GROUP</span></h1>
          <Image
            className=" relative top-20 left-8 z-10 "
            height="550"
            width="550"
            alt="logo"
            src="/images/texas.png"
          />
          <Image
            className="z-5 "
            height="1"
            width="1230"
            alt="houston"
            src="/images/houston.png"
          />
        </section>

        {/* Why ONIT Section */}
        <section className='py-20'>
          <div className='flex justify-between pl-20 pr-14'>
            <Image
              className=" "
              height="1"
              width="340"
              alt="logo"
              src="/images/condo.png"
            />
            <div className='flex flex-col w-[60%] gap-10'>
              <div className='w-full  font-semibold'>
                <h1 className='text-right'><span className='text-5xl'>WHY <span className='text-greenC8F3B0'>ONIT?</span></span></h1>
                <p className='text-right'>At Onit Property Management, we recognize the challenges associated with owning a rental property.
                  Our commitment is to alleviate the burdens on property owners while ensuring a superior quality-of-life
                  experience for our tenants. We go above and beyond to streamline the entire process, making property management
                  a seamless and rewarding venture for our clients.
                </p>
              </div>
              <div className='w-full font-semibold'>
                <h2 className='text-greenC8F3B0 font-semibold text-3xl'>SATISFACTION GUARANTEE</h2>
                <p>
                  We guarantee that you will be 100%<br />satisfied with our overall level of service.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Consultation Section */}
        <section className=' flex flex-col items-center gap-[15%] py-20'>
          <p className='text-greenC8F3B0 text-md font-semibold'>
            Loved by people who put their clients at the center of their property owner journey.
          </p>
          {/* consultation container */}
          <div className='flex relative gap-4 w-[55%] justify-around py-8 px-8 bg-gradient-to-b from-greenC8F3B0 to-rgba-200-243-176-10 rounded-3xl border-solid border-white border-[1px] '>
            <div className='flex flex-col w-2/3 space-y-4'>
              <div className=''>
                <p className='text-3xl font-bold'>GET STARTED!</p>
                <p className='text-[11px] w-4/5'>
                  We understand how tough the entire process of owning a rental property can be, and we do whatever it takes to reduce
                  the burden on the property owner while providing a high quality-of-life experience for our tenants. Please give us a call
                  to learn more about what we can do for you!
                </p>
              </div>
              <div className='relative py-4 w-2/3   flex bg-gray3E3E3E shadow-consultationButton rounded-full items-center justify-center hover:bg-black hover:cursor-pointer'>
                <h2 className=''>SCHEDULE A CONSULTATION</h2>
              </div>
            </div>
            <Image
              className=" rounded-full"
              height="1"
              width="200"
              alt="logo"
              src="/images/family.png"
            />
          </div>
        </section>
        {/* Mail list section */}
        <section className=' flex justify-center gap-[10%] py-20'>
          <form className='bg-green96B684  w-1/3   pt-[1%] rounded-[20px] pb-6'>
            <GoMail className='w-[3rem] h-[3rem] text-black ml-auto mr-auto' />
            <p className='text-black text-xl font-semibold text-center'>Newsletter</p>
            <p className='text-black text-xl font-semibold text-center'>Stay Informed with Onit</p>
            <div className='pt-4 ml-[10%] flex flex-col gap-[2rem] text-black font-semibold'>
              {/* name input */}
              <div className='flex flex-col'>
                <label>Name</label>
                <input className='w-[88%] py-2 border-[2px] rounded-[5px] border-grayA1A1A1 pl-[5px] focus:outline-none focus:bg-green-100 focus:placeholder-transparent' type='text' id='firstName' placeholder='full name'></input>
              </div>
              {/* email input */}
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input className='w-[88%] py-2 border-[2px] mt-[0.5rem] rounded-[5px] border-grayA1A1A1 pl-[5px] focus:outline-none focus:bg-green-100 focus:placeholder-transparent' type='text' id='email' placeholder='mail@example.com'></input>
              </div>
              {/* interests input */}
              <div>
                <label>What Properties are you Interested in?</label>
                <Select isMulti options={interestOptions} styles={selectStyles} className='w-[88%] h-[2rem mt-[0.5rem] outline-none ' />
              </div>
            </div>
            <div className='text-center mt-[8%]'>
              <button className='py-2 w-[9.5rem] bg-green70AD40 text-white hover:bg-gray3E3E3E  rounded-full font-semibold shadow-mailListButton' type='submit'>Subscribe</button>
            </div>
          </form>
          <div className=' text-center flex flex-col justify-center gap-[2%]'>
            <h2 className='text-greenC8F3B0 text-2xl font-semibold'>Join Our Mail List</h2>
            <p>
              Be the first to know about new listings and special offers!
            </p>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className='flex flex-col py-10 mb-[3rem]'>
          <h1 className='text-3xl font-semibold text-greenC8F3B0 w-[10rem] relative left-[7.5rem] '>Testimonials</h1>
          <div className='mx-auto'>
            <TestimonialCarousel />
          </div>
        </section>
        <footer className=' w-[85%] flex flex-col   border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[40%] ml-[5rem]'>
          <div className='flex justify-between'>
            <div className='flex flex-col text-5xl gap-[3.5rem]'>
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
          <div className='flex justify-end relative'>
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
