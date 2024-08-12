import Image from 'next/image'
import React from 'react'

export function TestimonialOne() {
  return (
    <section className="px-2 py-10 md:px-0">
        <div className='text-center w-full mb-12'><p className='md:text-4xl text-2xl font-extrabold'>Testimonials</p></div>
      <div className="mx-auto max-w-4xl">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="relative h-48 w-48 flex-shrink-0">
            <Image
              className="relative h-48 w-48 rounded-full object-cover"
              layout='fill'
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
            />
          </div>

          <div className="mt-10 md:mt-0">
            <blockquote>
              <p className="text-xl text-black">
                I have been a victim of Ragging. It was a horrific experience that would stay with me for the rest of my life,
                still, I am grateful to the Anti-Ragging Committee for their prompt action and support. I was able to get out of that hellhome.
              </p>
            </blockquote>
            <p className="mt-7 text-lg font-semibold text-black">Akhil Raj</p>
            <p className="mt-1 text-base text-gray-600">Student at Thapar University</p>
          </div>
        </div>
      </div>
    </section>
  )
}
