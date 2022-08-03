import React from 'react'
import './sideBar.css'



export  function SideBar() {

  return (
    <div className="sidebar">
      <button className='btn' >icon | pseudo de l'utilisateur</button>
      <p>tous les favoris</p>
      <p>collections</p>
      <p>tri rapide...</p>
      <p>Tags (nombre de tags )</p>
      {/* <Title text='test'/> */}
    </div>
  )
}
