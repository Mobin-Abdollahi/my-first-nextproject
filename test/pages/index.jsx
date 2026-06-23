import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
        hello world
        <Link href= {"/about"} style={{color : 'blue'}}>about</Link>
        <br/>
        <Link href= {"/product"} >product</Link>
        <br/>
        <Link href= {"/houses"} >about</Link>
    </div>
  )
}

export default index