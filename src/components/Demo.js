import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import DummyCounter from './DummyCounter'

export default class Demo extends Component {
state={
 counter:0
}

onDecrement=()=>{
    this.setState({
        counter:this.state.counter-1
    })
}

onIncrement=()=>{
   
    this.setState(
        {
          counter: this.state.counter+1  
        }
    )

}


    render() {
        return (
            <div>

               <h1>  {this.state.counter} </h1>
        

<Button 
variant="contained"
onClick={this.onIncrement}
color="primary"
> + </Button>

<Button
variant="contained"
onClick={this.onDecrement}
color="secondary"
> - </Button>
<br>

</br>

<DummyCounter mycounter={this.state.counter} />

            </div>
        )
    }
}
