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

      <main className='pt-[15vh] ml-[9vw]'>
        {/* Introduction Section */}
        <section className='h-[100vh] relative mb-[20vh]'>
          <h1 className='text-4xl font-semibold w-[45vw] text-center absolute right-0 top-[30%]'> HOUSTON'S <span className='text-greenC8F3B0 text-7xl' >#1</span> <span className='text-greenC8F3B0'>PROPERTY<br />MANAGEMENT GROUP</span></h1>
          <Image
            className="absolute z-10 top-[8%] left-[5%]"
            height="550"
            width="550"
            alt="logo"
            src="/images/texas.png"
          />
          <Image
            className="absolute z-5 bottom-0 left-[4%]"
            height="1"
            width="1230"
            alt="houston"
            src="/images/houston.png"
          />
        </section>

        {/* Why ONIT Section */}
        <section className='mt-[5%] relative h-[100vh] mb-[10vh]'>
          <div className='w-[40vw] relative top-[10%] left-[50%] font-semibold'>
            <h1 className='text-right'><span className='text-5xl'>WHY <span className='text-greenC8F3B0'>ONIT?</span></span></h1>
            <p className='text-right'>At Onit Property Management, we recognize the challenges associated with owning a rental property.
              Our commitment is to alleviate the burdens on property owners while ensuring a superior quality-of-life
              experience for our tenants. We go above and beyond to streamline the entire process, making property management
              a seamless and rewarding venture for our clients.
            </p>
          </div>
          <div className='w-[40vw] relative top-[30%] left-[45%] font-semibold'>
            <h2 className='text-greenC8F3B0 font-semibold text-3xl'>SATISFACTION GUARANTEE</h2>
            <p>
              We guarantee that you will be 100%<br />satisfied with our overall level of service.
            </p>
          </div>
          <Image
            className="absolute top-[13%] left-[4%]"
            height="1"
            width="340"
            alt="logo"
            src="/images/condo.png"
          />
        </section>
        {/* Consultation Section */}
        <section className='h-[70vh] flex flex-col items-center gap-[15%]'>
          <p className='text-greenC8F3B0 text-[1.07rem] font-semibold'>
            Loved by people who put their clients at the center of their property owner journey.
          </p>
          {/* consultation container */}
          <div className='relative h-[40vh] w-[50vw] bg-gradient-to-b from-greenC8F3B0 to-rgba-200-243-176-10 rounded-3xl border-solid border-white border-[1px] '>
            <div className='relative top-[20%] left-[8%]'>
              <p className='text-3xl font-bold'>GET STARTED!</p>
              <p className='w-[50%] text-[11px]'>
                We understand how tough the entire process of owning a rental property can be, and we do whatever it takes to reduce
                the burden on the property owner while providing a high quality-of-life experience for our tenants. Please give us a call
                to learn more about what we can do for you!
              </p>
            </div>
            <div className='relative h-[20%] w-[50%] top-[30%] left-[8%] flex bg-gray3E3E3E shadow-consultationButton rounded-full items-center justify-center hover:bg-black hover:cursor-pointer'>
              <h2 className=''>SCHEDULE A CONSULTATION</h2>
            </div>
            <Image
              className="absolute top-[20%] right-[5%] rounded-full"
              height="1"
              width="200"
              alt="logo"
              src="/images/family.png"
            />
          </div>
        </section>

        {/* Mail list section */}
        <section className='relative h-[100vh] flex justify-center gap-[10%] pt-[10%] mb-[10vh]'>
          <form className='bg-green96B684 h-[78%] w-[35%]   pt-[1%] rounded-[20px]'>
            <GoMail className='w-[3rem] h-[3rem] text-black ml-auto mr-auto' />
            <p className='text-black text-xl font-semibold text-center'>Newsletter</p>
            <p className='text-black text-xl font-semibold text-center'>Stay Informed with Onit</p>
            <div className='mt-[5%] ml-[10%] flex flex-col gap-[2rem] text-black font-semibold'>
              {/* name input */}
              <div className='flex flex-col'>
                <label>Name</label>
                <input className='w-[88%] h-[2.5rem] border-[2px] rounded-[5px] border-grayA1A1A1 pl-[5px]' type='text' id='firstName' placeholder='full name'></input>
              </div>
              {/* email input */}
              <div className='flex flex-col'>
                <label htmlFor="email">Email</label>
                <input className='w-[88%] h-[2.5rem] border-[2px] mt-[0.5rem] rounded-[5px] border-grayA1A1A1 pl-[5px]' type='text' id='email' placeholder='mail@example.com'></input>
              </div>
              {/* interests input */}
              <div>
                <label>What Properties are you Interested in?</label>
                <Select isMulti options={interestOptions} className='w-[88%] h-[2rem mt-[0.5rem]' />
              </div>
            </div>
            <div className='text-center mt-[8%]'>
              <button className='h-[2.5rem] w-[9.5rem] bg-green70AD40 text-white hover:bg-gray3E3E3E  rounded-full font-semibold shadow-mailListButton' type='submit'>Subscribe</button>
            </div>
          </form>
          <div className='relative top-[20%] text-center flex flex-col gap-[2%]'>
            <h2 className='text-greenC8F3B0 text-2xl font-semibold'>Join Our Mail List</h2>
            <p>
            Be the first to know about new listings and special offers!
            </p>
          </div>
        </section>

        {/* Testimonies Section */}
        {/* <section className='flex gap-[10%] justify-center mb-[20%]'>
          <div className='flex flex-col w-[50%] gap-[10%]'>
            <h1 className='text-2xl font-semibold text-greenC8F3B0'>Testimonials</h1>
            <p>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
            </p>
          </div>
          <div className='flex flex-col text-center gap-[5vh]'>
            <Image
              className=" rounded-full"
              height="250"
              width="250"
              alt="logo"
              src="/images/testimonial1.png"
            />
            <p className='text-greenC8F3B0 text-xl font-semibold'>Alexandra Nguyen</p>
          </div>
        </section> */}
        <section className='flex flex-col gap-[10%] mb-[10rem]'>
          <h1 className='text-2xl font-semibold text-greenC8F3B0 w-[10rem] relative left-[13.5rem] top-[2rem]'>Testimonials</h1>
          <div className='mx-auto'>
            <TestimonialCarousel />
          </div>
        </section>

        <footer className='h-[100vh] w-[80%] flex flex-col ml-auto mr-auto border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[40%]'>
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
