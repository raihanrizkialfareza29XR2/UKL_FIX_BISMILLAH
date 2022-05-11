import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NoPermission = () => {
  return (
    <div>
        Mohon maaf, anda tidak mempunyai hak akses ke halaman ini  
        <div>
        <Link to="/" className="btn btn-primary">Ke Home Yaaa</Link>
        </div>
    </div>
  )
}

export default NoPermission