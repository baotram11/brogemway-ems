import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const params = useParams();
    const {ProID} = params;

    return (
    <div className='product'>
        {ProID}
    </div>
  )
}
