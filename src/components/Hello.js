import React from 'react'

export const Hello = () => {
    return (
        <div className='hello'>
            <div className='hello__title'>Hello</div>
            <div className='hello__about' >My name is Ilya, I'm a front-end developer</div>
            <div className='hello__menu'>
                <div className='menu__item'>
                    Skills
                </div>
                <div className='menu__item'>
                    Projects
                </div>
                <div className='menu__item'>
                    My Contacts
                </div>
            </div>
        </div>
    )
}