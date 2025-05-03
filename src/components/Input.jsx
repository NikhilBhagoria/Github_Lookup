import React from 'react'

const Input = ({type="text",value=""}) => {
  return (
    <>
    <input type={type} value={value} />
    </>
  )
}

export default Input