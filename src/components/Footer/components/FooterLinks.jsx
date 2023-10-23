import React from 'react'

const FooterLinks = () => {
  return (
    <div className='text-right w-full z-10 relative'>
        <h3 className='lg:text-3xl text-2xl mb-5'>لینک ها</h3>
        <ul className='list-disc list-inside pr-3 lg:text-2xl text-xl flex flex-col gap-3'>
            <li>صفحه اصلی</li>
            <li>آموزش</li>
            <li>مالی</li>
            <li>خدمات</li>
        </ul>
    </div>
  )
}

export default FooterLinks