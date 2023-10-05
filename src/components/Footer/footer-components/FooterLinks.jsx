import React from 'react'

const FooterLinks = () => {
  return (
    <div className='text-right w-full'>
        <h3 className='text-3xl mb-5'>لینک ها</h3>
        <ul className='list-disc list-inside pr-3 text-2xl flex flex-col gap-3'>
            <li>صفحه اصلی</li>
            <li>آموزش</li>
            <li>مالی</li>
            <li>خدمات</li>
        </ul>
    </div>
  )
}

export default FooterLinks