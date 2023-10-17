import React from 'react'
import CheckboxInput from './CheckboxInput'
import filterData from '../../core/services/filterData/filterData'

const DropDown = ({name , data , checkBoxType,height ,courseData,setData}) => {
    const dataMepper = data.map((item , index)=>(
        <div className="flex p-2"key={index}>
            <input type={checkBoxType} name={name} id={name+index} />
            <label htmlFor={name+index} className='pr-10' onClick={()=>{filterData(courseData ,item,setData)}}>{item}</label>
        </div>
    ),)
  return (
    <div className="bg-[#EAE5FF] text-[#2C007F] px-7 rounded-xl my-5 dark:bg-newPurpleAlpha2 dark:text-[#fff]">
      <CheckboxInput name={name} className={'checkbox'} />
      <label htmlFor={name} className=" border-b-2 block py-[18px] px-3 border-[#2C007F30] dark:border-[#fff5]">فیلتر بر اساس موضوع</label>
      <div className={"content transition-all w-full overflow-hidden "+height}>
        {dataMepper}
      </div>
    </div>
  )
}

export default DropDown