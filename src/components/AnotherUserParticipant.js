import React from 'react'
import { useState } from 'react'
import UserParticipation from './UserParticipation'
import ThankyouMessage from './ThankyouMessage';


function AnotherUserParticipant() {
    const [count, setCount] = useState('');
    function handlesubmit(event){
        setCount(event.target.value);
        
    }
  return (
    <div>
        <UserParticipation></UserParticipation>
        <button onClick={handlesubmit}>submit</button>
       
    </div>
  )
}

export default AnotherUserParticipant