import React from 'react'

const InfoCart = ({title, desc}) => {
    return (
        <div className="w-full max-w-md">
            <h1 className='text-4xl md:text-5xl font-bold'>{title}</h1>
            <p className='text-lg mt-4'>
                {desc}
            </p>
        </div>)
}

export default InfoCart