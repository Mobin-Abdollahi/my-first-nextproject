import { useRouter } from 'next/navigation'
import React from 'react'

const productid =() =>{
    const router = useRouter();
    const {productid} = router.query

    const handlePushToDetail = () =>{
      router.push(`${{productid}}/details`)
    }
  return (
    <div>
      
      product:{productid}
     
      <div>

        <button onClick={handlePushToDetail}>

          product:{productid} details

        </button>
      </div>
    
    
    </div>
  )
}

export default [productid]