import React from 'react'

const FooterInput = ({className ,inputDivClass}) => {
  return (
    <div className={' '+className}>
      <p className='text-xl my-3'>برای دریافت اخبار از طریق ایمیل ثبت نام  کنید</p>
      <div className={"relative w-[416px] h-[50px] rounded-xl overflow-hidden bg-[#F9F6FF] dark:bg-newPurpleAlpha2 dark:bg-darkblue2 "+ inputDivClass}  >
        <button className='primary-btn footer-btn'>ارسال</button>
        <input type="email" className='w-full h-full text-left px-4 bg-[transparent] placeholder:text-[#0002] text-[#181355] dark:text-semiWhite dark:placeholder:text-whitePink '  placeholder='HexaSquad@gmail.com'/>
      </div>
    </div>
  )
}

export default FooterInput