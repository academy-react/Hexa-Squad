import React from 'react'
import AutoTypeWriter from './AutoTypeWriter'

const HeroSectionInfo = ({typeWriterWords , typeSpeed ,loop , title , upperTitle}) => {
  return (
    <div className="lg:w-8/12 w-full flex flex-col justify-center lg:items-start items-center lg:px-32 sm:px-20 px-0  lg:gap-7 z-20">
      <p className="text-lightblue mb-1 lg:text-[20px] md:text-base sm:text-sm">
        {upperTitle}
      </p>
      <h2 className="lg:text-[48px] md:text-[36px] text-darkblue dark:text-semiWhite mb-5 text-[30px] leading-[65px]">
        {title}
      </h2>
      <AutoTypeWriter
        Text={typeWriterWords}
        className={
          "text-[#03001CB2] lg:h-50 h-32 lg:text-[24px] md:text-[20px] leading-[40px] lg:text-right text-center dark:text-[#fffb] w-full"
        }
        typeSpeed={typeSpeed}
        loop={loop}
      />
    </div>
  )
}

export default HeroSectionInfo