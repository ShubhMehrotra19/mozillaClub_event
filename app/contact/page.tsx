import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

export default function NewsLetterThree() {
  return (
    <div className="w-screen h-screen px-2 py-2 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
        <div className="w-full md:w-2/3 lg:w-1/2 px-12">
          <h2 className="text-3xl font-bold text-black">Contact us</h2>
          <p className="mt-4 text-gray-600">
           We know that being a victim of ragging can be a traumatic experience. We are here to help you. Reach out to us for any queries or support.
          </p>
          <div className="mt-4">
            <p className="font-semibold text-gray-800">
              Trusted by over 100,000+ students
            </p>
            
          </div>
          <form className="mt-6">
            <div className="flex w-full max-w-md flex-col space-y-4">
              <input
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-8 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Tell us, We are here to help"
              ></input>
              <button
                type="button"
                className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Submit
              </button>
            </div>
          </form>
    
        </div>
        <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
          <div className="relative h-screen w-full">
            <Image
              className="rounded-md object-cover"
              src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt="Newsletter"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
