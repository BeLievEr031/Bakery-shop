import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import { MdOutlineVolunteerActivism, MdAutorenew } from "react-icons/Md"
import { FiThumbsUp } from "react-icons/fi"
import { GrGroup } from "react-icons/Gr"
import { BsEmojiSmile } from "react-icons/bs"

function About() {
  // const src = "https://images.unsplash.com/photo-1594161433013-43d02893c83d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
  const src = "https://images.unsplash.com/photo-1511018556340-d16986a1c194?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='mt-16'>
        <div className='h-[500px]'>
          <img src={src} alt="shop-image" className='w-full h-full object-cover' />
        </div>
        <div className='mt-16'>
          <h1 className='text-6xl text-center px-16 p-6'>Baking Joy Since [Year]: Taste the Divine Delights of [Your Cake Shop Name]!</h1>

        </div>
        <div className='flex justify-center'>
          <div className='mt-16 px-10 pt-6 flex'>
            <div className='w-[500px] h-[500px] bg-indigo-100 relative '>
              <img src="https://images.unsplash.com/photo-1617296956430-dd029301bf1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNha2UlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" className='w-full h-full object-cover absolute left-4 bottom-4' />
            </div>
            <div className='ml-12 w-[550px]'>
              <h1 className='text-4xl font-semibold leading-3'>Who We Are</h1>
              <p className='text-justify py-6 text-[20px]'>
                At [Your Cake Shop Name], we are more than just a bakery – we are purveyors of happiness through the art of baking. Our team of skilled and passionate bakers work tirelessly to create edible masterpieces that not only delight the taste buds, but also captivate the senses with their exquisite beauty.

                With a deep-rooted love for all things sweet and a commitment to exceptional quality, we have been proudly serving our community since [Year]. Our cakes are not just desserts, but works of art that are meticulously handcrafted with care, attention to detail, and a sprinkle of magic.

                We believe that every celebration deserves a perfect cake, whether it's a birthday, anniversary, wedding, or any special occasion. Our extensive menu offers a wide variety of flavors, fillings, and designs to suit every palate and preference. From classic favorites to unique creations.
              </p>
            </div>
          </div>
        </div>
        <div>
          <Header text='Our Core Value' />
          <div className='mt-10 flex justify-around mb-6'>
            <div className='w-[250px] h-[342px] flex flex-col  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
              <div className='bg-violet-200 w-[100px] h-[100px] flex justify-center items-center rounded-full'>
                <FiThumbsUp size={50} />
              </div>
              <p className='text-lg font-semibold pt-4'>Character</p>
              <p className='text-center pt-4'>
                Trustworthiness, Commitment, Integrity, Ethics, Fair-play, Compliance, Transparency, Persistence, Ownership, Finishing to the end, Doing the most difficult task first
              </p>
            </div>
            <div className='w-[275px] h-[342px] flex flex-col  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
              <div className='bg-red-200 w-[100px] h-[100px] flex justify-center items-center rounded-full'>
                <MdOutlineVolunteerActivism size={50} />
              </div>
              <p className='text-lg font-semibold pt-4'>Compassion</p>
              <p className='text-center pt-4'>
                Empathy, Respect , Gratitude, Inclusiveness
              </p>
            </div>
            <div className='w-[275px] h-[342px] flex flex-col  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
              <div className='bg-indigo-200 w-[100px] h-[100px] flex justify-center items-center rounded-full'>
                <BsEmojiSmile size={50} />
              </div>
              <p className='text-lg font-semibold pt-4'>Customer Centric</p>
              <p className='text-center pt-4'>
                Customer (External as well as Internal i.e. Employees & Partners), Responsiveness, Pro-Feedback, Accountability
              </p>
            </div>
            <div className='w-[275px] h-[342px] flex flex-col  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
              <div className='bg-purple-300 w-[100px] h-[100px] flex justify-center items-center rounded-full'>
                <GrGroup size={50} />
              </div>
              <p className='text-lg font-semibold pt-4'>Collective Growth</p>
              <p className='text-center pt-4'>
                Profitability, Cost-consciousness, Inclusiveness, Sustainability, Community service, Social Responsibility
              </p>
            </div>
            <div className='w-[275px] h-[342px] flex flex-col  items-center shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-4'>
              <div className='bg-green-200 w-[100px] h-[100px] flex justify-center items-center rounded-full'>
                <MdAutorenew size={50} />
              </div>
              <p className='text-lg font-semibold pt-4'>Continuous Transformation</p>
              <p className='text-center pt-4'>
                Experiment, Innovation, Continuous Improvement, Curiosity, Sharing & seeking knowledge, Collaboration, Being Devil's advocate, Introspection, Resilience.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About