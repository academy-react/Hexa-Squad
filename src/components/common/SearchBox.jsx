import React from 'react'

const SearchBox = ({placeholder,SearchFunction,addClass}) => {
  return (
    <div className={"relative w-full h-12 "+addClass}>
      <input
        placeholder={placeholder}
        type={"search"}
        name={"search"}
        onKeyUp={(event)=>{SearchFunction(event.target.value)}}
        className="field-input outline-none text-darkblue2"
      />
      <i
        className={
          "bi bi-search absolute  top-3 text-xl left-4 text-[#12124266] dark:text-[#fff] "
        }
      ></i>
    </div>
  )
}

export default SearchBox