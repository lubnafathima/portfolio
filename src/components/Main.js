import React from 'react'
import MemorableImg from "../assets/images/memorable-light.svg";

const Main = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-12 md:mt-24 lg:mt-36 xl:mt-48 p-6">
        <h2 className="w-full lg:w-[50vw] text-3xl lg:text-[4rem] leading-none tracking-wide font-semibold text-start">
          Effective code builds functional and impactful user experiences.
        </h2>
        <div className="w-full lg:w-[50vw] flex flex-col lg:flex-row mt-12 items-center">
          <img
            src={MemorableImg}
            alt="Memorable Img"
            className="rotate-in-place no-drag"
          />
          <div className="text-start text-lg">
            <p>
              Develop robust and intuitive web applications that are not only
              performant and user-friendly but also transformative and essential
              for enhancing daily experiences.
            </p>
            <br />
            <p>
              These applications demonstrate a relentless pursuit of coding
              excellence and innovation, delivering web solutions that provide
              lasting value and impact.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Main
