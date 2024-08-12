import React from "react";
import Image from "next/image";

interface Props {}

function Description(props: Props) {
  const {} = props;

  return (
    <>
      <section className="px-2 pt-32 bg-white md:px-0 mb-12">
  <div className="container max-w-7xl px-5 mx-auto mb-12">
    <div className="text-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl md:text-center mb-24">
        <span className="block">
          Importance of {" "}
          <span className="block mt-1 text-blue-700 lg:inline lg:mt-0">
             Anti-Ragging
          </span>
          ✊🏽
        </span>
      </h1>
    </div>

    <div className="flex flex-col items-start mt-8 md:flex-row md:space-x-6">
      <div className="w-full md:w-1/2">
        <Image
          src="/images/helping.png"
          alt="heroPic"
          width={800}
          height={500}
          className="rounded"
        />
      </div>

      <div className="w-full md:w-1/2 md:mt-0">
        <p className=" text-lg text-left text-gray-500 sm:text-lg lg:text-2xl md:text-left pl-4 pr-12">
          Anti-ragging measures are crucial for any educational institution&rsquo;s
          website as they help create a safe and inclusive environment for
          students. Ragging, which involves bullying or harassment, can have
          severe psychological and physical effects on students, potentially
          leading to long-term harm. By implementing and prominently displaying
          anti-ragging measures on a website, institutions demonstrate their
          commitment to student welfare, ensure compliance with legal
          requirements, and foster a culture of respect and support. These
          measures not only deter potential offenders but also provide clear
          guidelines and resources for victims to seek help, contributing to a
          safer campus community.
        </p>

        <div className="flex flex-col justify-center mt-6 md:flex-row md:space-x-4">
          <a
            href="#_"
            className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-blue-500 rounded-md md:mb-0 hover:bg-blue-700 md:w-auto transition-all duration-300 cursor-pointer ease-in-out hover:scale-[102%] active:scale-95"
            data-primary="purple-500"
            data-rounded="rounded-md"
          >
            Report a Case
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            href="#_"
            className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 transition-all duration-300 cursor-pointer ease-in-out hover:scale-[102%] active:scale-95"
            data-rounded="rounded-md"
          >
            Learn Your Rights
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default Description;
