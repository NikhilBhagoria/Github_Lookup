import React from 'react'

const Button = ({title,cls}) => {
  return (
    <button className={cls}>
        {title}
    </button>
  )
}

export default Button