import React from 'react'
import { useRouter } from 'next/router';

const [...params] = () => {
  const router = useRouter();
  const {params = []} = router.query

  return (
    <div>

      <div>
        {params[0]}
      </div>

      while params...

      </div>
  )
}

export default [...params]