import Image from 'next/image'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
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

      <main className='pt-[15vh] ml-[12vw]'>
        {/* Introduction Section */}
        <section className='h-[100vh] relative'>
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
            width="1180"
            alt="logo"
            src="/images/houston.png"
          />
        </section>

        {/* Why ONIT Section */}
        <section className='mt-[5%] relative h-[100vh]'>
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
          <p className='text-greenC8F3B0'>
            Loved by people who put their clients at the center of their property owner journey.
          </p>
          {/* consultation container */}
          <div className='relative h-[40vh] w-[50vw] bg-greenC8F3B0 rounded-3xl '>
            <div className='relative top-[20%] left-[8%]'>
              <p className='text-3xl font-bold'>GET STARTED!</p>
              <p className='w-[50%] text-[11px]'>
                We understand how tough the entire process of owning a rental property can be, and we do whatever it takes to reduce
                the burden on the property owner while providing a high quality-of-life experience for our tenants. Please give us a call
                to learn more about what we can do for you!
              </p>
            </div>
            <div className='relative h-[20%] w-[50%] top-[30%] left-[8%] flex bg-gray-700 rounded-full items-center justify-center'>
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
        <section className='relative h-[100vh] flex justify-center gap-[10%]'>
          <form className='bg-greenC8F3B0 h-[65%] w-[35%] flex flex-col items-center gap-[9%] pt-[8%]'>
            <input className='w-[75%] h-[8%]' type='text'></input>
            <input className='w-[75%] h-[8%]' type='text'></input>
            <input className='w-[75%] h-[8%]' type='text'></input>
            <input className='w-[75%] h-[8%]' type='text'></input>
            <button className='h-[10%] w-[40%] bg-white text-black rounded-full font-semibold' type='submit'>Submit</button>
          </form>
          <div className='relative top-[20%] text-center flex flex-col gap-[2%]'>
            <h2 className='text-greenC8F3B0 text-2xl font-semibold'>Join Our Mail List</h2>
            <p>
              Get exclusive advice for improving the value of your asset!
            </p>
          </div>
        </section>

        {/* Testimonies Section */}
        <section className='flex gap-[10%] justify-center mb-[20%]'>
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
        </section>
        <footer className='h-[100vh] w-[80%] flex flex-col ml-auto mr-auto border-t-4 border-t-greenC8F3B0 pt-[8%] gap-[40%]'>
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
