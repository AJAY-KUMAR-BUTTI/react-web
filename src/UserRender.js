import React, { useEffect } from 'react'

import DbConnection from './DbConnection';

function UserRender({counter}) {
    const conn = DbConnection();

    useEffect(() => {
        conn.connect()
        return () => {
            conn.disconnect()
        }
    }, [])
  return (
    <div>
      
    </div>
  )
}

export default UserRender
