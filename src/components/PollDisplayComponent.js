import React, { Component } from 'react'

const choices =[
    { "id": 1, "label": "JavaScript", "votes": 0 },

    { "id": 2, "label": "Python", "votes": 5 },

    { "id": 3, "label": "Java", "votes": 7},

    { "id": 4, "label": "C#", "votes": 0 }]

const ques ="What is your favorite programming language?"
const choice =choices.map(choice=>(<div><h2>{choice.id}</h2><label>{choice.label}</label><div><input type='radio'></input></div></div>))

export default class PollDisplayComponent extends Component {
constructor(props) {
  super(props)

  this.state = {
     language:'',
     count:0
  }


}
handleChange(event){
    let {name, value, checked, type, selectedOptions} = event.target
    if(type === 'checkbox')
    value = checked
    if(name === 'languages')
        value = Array.from(selectedOptions, option => option.value)
   

    this.setState({[name]: value})
    
}
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Polling App</h1>
        <div>{ques}</div>
<       div>{choice}</div>
        <button >submit</button></form>
        </div>
    )
  }
}
