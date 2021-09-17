import { Button, Grid, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class AddCourse extends Component {
    state={
    courseTitle: "",
    courseDescription: "",
    courseDate: "",
    courseDuration: "",
    courseVenue: ""

    }
    onHandle=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    onRead=()=>{
        console.log(this.state)

        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Added Succesfully ")
                }
                else{
                    alert("Something went wrong")

                }

            }
        )


    }
    render() {
        return (
            <div>
                <Grid container style={{padding:50}}>

                    <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                        fullWidth
                        variant="outlined"
                        label="Enter name"
                        margin="normal"
                        name="courseTitle"
                        onChange={this.onHandle}

                        />

                    </Grid>
                    <Grid style={{padding:5}}  item xs={12} sm={6} md={6} lg={6} xl={6}>

                    <TextField
                    fullWidth
                        variant="outlined"
                        label="Enter Description"
                        margin="normal"
                        name="courseDescription"
                        onChange={this.onHandle}

                        />
                    </Grid>
                    <Grid style={{padding:5}} item xs={12} sm={6} md={6} lg={6} xl={6}>


                    <TextField
                    fullWidth
                    type="date"
                        variant="outlined"
                        label="Enter Date"
                        margin="normal"
                        name="courseDate"
                        onChange={this.onHandle}

                        />

                    </Grid>
                    <Grid style={{padding:5}}  item xs={12} sm={6} md={6} lg={6} xl={6}>

                    <TextField
                    fullWidth
                    type="text"
                        variant="outlined"
                        label="Enter Venue"
                        margin="normal"
                        name="courseVenue"
                        onChange={this.onHandle}

                        />
                    </Grid>
                    <Grid style={{padding:5}}  item xs={12} sm={6} md={6} lg={6} xl={6}>

                    <TextField
                    fullWidth
                    type="text"
                        variant="outlined"
                        label="Enter Duration"
                        margin="normal"
                        name="courseDuration"
                        onChange={this.onHandle}

                        />
                    </Grid>

                    <Grid style={{padding:5}}  item xs={12} sm={12} md={12} lg={12} xl={12}>

<Button onClick={this.onRead} fullWidth color="secondary" variant="contained"> SUBMIT</Button>
                    </Grid>


                </Grid>
                
            </div>
        )
    }
}
