import React from 'react'
import { Link } from 'react-router-dom'

const LinkUrl = ({url, text}) => {
    return (
        <Link className='hover:scale-105 transition-all' to={url}>{text}</Link>
    )
}

export default LinkUrl