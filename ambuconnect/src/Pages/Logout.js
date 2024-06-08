import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite/auth';

const Logout= () => {

    const navigate = useNavigate();

    async function logoutfunc() {
        const promise = account.deleteSessions();

        promise.then(function (response) {
            console.log(response); // Success
            navigate("/")
        }, function (error) {
            console.log(error); // Failure
        });
      }
    
  
  return (
    <div>
      <button onClick={logoutfunc}>logout</button>
    </div>
  )
}

export default memo(Logout)