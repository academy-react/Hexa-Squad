import React from 'react'
import FooterInput from '../../common/FooterInput'

const ConectUs = () => {
  return (
    <div className='text-right w-full relative z-10'>
        <h3 className='lg:text-3xl text-2xl mb-5'>ارتباط با ما</h3>
        <ul>
            <li className='relative pr-16 text-xl  my-6 '><i className="bi bi-telephone absolute top-0 right-3 rotate-[260deg] lg:text-4xl md:text-3xl text-2xl"></i> 011-33106666 </li>
            <li className='relative pr-1 text-xl my-6 flex items-center '><i className="bi bi-envelope-at lg:text-4xl md:text-3xl text-2xl px-3"></i> HexaSquad@gmail.com </li>
        </ul>
        <FooterInput className={'my-8 block lg:hidden'} inputDivClass={'w-full'}/>
    </div>
  )
}

export default ConectUs