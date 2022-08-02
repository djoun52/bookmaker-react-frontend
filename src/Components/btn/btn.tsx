import React from 'react'

export default function Btn(icon = null, text:any, fct: () => void) {
  return (


    <button className="btn" onClick={fct} >
      {icon}
      {text}
    </button>
    
  )
}
