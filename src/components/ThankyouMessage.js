import React from 'react'


function ThankyouMessage(props) {
    let msg=true;
    let message
    if(msg){
        message=<div>Thankyou</div>}
  return (
    <div>{message}</div>
  )
}

export default ThankyouMessage