import React from 'react'

const CartInfoImg = ({imagen}) => {
    return (
        <div className="w-full max-w-md">
            <img className='object-cover hover:scale-110 transition-all duration-500 cursor-cart w-full h-full' src={imagen} alt="" />
        </div>
    )
}

export default CartInfoImg