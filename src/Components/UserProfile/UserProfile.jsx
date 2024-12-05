import React from 'react'
import { useSelector } from 'react-redux'

function UserProfile() {
    const histery = useSelector((state) => state.Myreducer.history);

  return (
    <div>
        <div> 
            histery
            
                {
                    histery.map((item,index)=>(
                        <div key={index+1}>{item}</div> 
                    ))

                }
          
        </div>
    </div>
  )
}

export default UserProfile