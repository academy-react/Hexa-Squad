import React from 'react'

const Title = ({inner,className}) => {
  return (
    <h2 className={"title "+className}>
      {inner}
      <span className="absolute w-[100%] block mt-3 h-2 my-1 bg-gradient-to-l from-newPurpleAlpha2 to-transparentPurple2"></span>
    </h2>
  )
}

export default Title