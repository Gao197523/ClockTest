//This is the second API debugging task.
//The task is about React.js, which is similar to JavaScript.
//In this task, we will use API to make a function worked.
//We have a webpage. The function is show a worked clock,
//which could help us calculate the time. (the number of the clock should move with time changing)

import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }

 ComponentWillMount()
 {
   setInterval(()=>this.currentTime(),1000)
 }

setState()

  render() {

    return (
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}

export default App;
