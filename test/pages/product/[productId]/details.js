import { useRouter } from 'next/router';
import React from 'react'

const details = () => {
    const router = useRouter();
    const {productid} = router.query
  return (
    <div>
        <div>
            {productid}
        </div>
        details
        </div>
  )
}

export default details