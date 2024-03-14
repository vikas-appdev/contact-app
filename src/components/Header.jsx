import React from 'react'

const Header = ({ toggleModel, nbOfContacts }) => {
  return (
    <div className='header'>
        <div className='container'>
            <h3>Contact List ({ nbOfContacts })</h3>
            <button onClick={()=> toggleModel(true)} className='btn'><i className='bi bi-plus-square'></i>Add New Contact</button>
        </div>
    </div>
  )
}

export default Header