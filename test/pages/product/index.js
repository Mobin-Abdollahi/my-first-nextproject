import React from 'react'

const index =()  =>{
  return (
    <div>
        product page :

    <Link href={{
      pathname : "/product/1",
      query : {id : 1}
    }}>

    product page1

    </Link>

    <Link href={{
     pathname : "/product/2",
      query : {id : 2}
    }} replace>

    product page2

    </Link>
    <Link href={{
      pathname : "/product/3",
      query : {id : 3}
    }}>

    product page3

    </Link>
    
    <Link href={{
      pathname : "/product/4",
      query : {id : 4}
    }}>

    product page4

    </Link>

    </div>
  )
}

export default index