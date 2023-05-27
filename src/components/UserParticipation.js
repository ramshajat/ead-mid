import React, { useEffect, useState } from 'react'
import PollDisplayComponent from './PollDisplayComponent'
import ThankyouMessage from './ThankyouMessage'
function UserParticipation() {
//  const[count,setcount]=useState(0);
//  useEffect(() => {
//     setcount: `${count}`
// }, [count])
// const handleChange = (choice) => {
//     choice === selItem ? setSelItem(null) : setSelItem( choice);
//   };
  return (
    <div>
        <PollDisplayComponent></PollDisplayComponent>
        <div>{choice}</div>
        <ThankyouMessage></ThankyouMessage>
    </div>
  )
}
const choices =[
    { "id": 1, "label": "JavaScript", "votes": 0 },

    { "id": 2, "label": "Python", "votes": 5 },

    { "id": 3, "label": "Java", "votes": 7},

    { "id": 4, "label": "C#", "votes": 0 }]
const choice =choices.map(choice=>(<div>{choice.label} got {choice.votes}</div>))


export default UserParticipation