import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core'
import React, { Component } from 'react'



export default class EmployeeDataRead extends Component {

    state={
        firstname:"",
        age:0,
        gender:"",
        country:""
    }

submitData=()=>{

  console.log(this.state)  

}

handleData=(event)=>{
    this.setState(
        {
           
        [event.target.name]:event.target.value
        }
    )
}

    render() {
        return (
           
            <Grid container>

<Grid item xs={12} sm={12} md={12}>

    <TextField
    variant="outlined" 
    margin="normal"
    name="firstname"
    fullWidth
    placeholder="Enter name"
    onChange={this.handleData}
    />

</Grid>
<Grid item xs={12} sm={12} md={12}>

<TextField
    variant="outlined" 
    margin="normal"
    name="age"
    fullWidth
    placeholder="Enter Age"
    onChange={this.handleData}
    />


</Grid>


<Grid item xs={12}>
<RadioGroup onChange={this.handleData} aria-label="gender" name="gender"  >
    <FormControlLabel value="female"  control={<Radio />} label="Female" />
    <FormControlLabel  value="male" control={<Radio />} label="Male" />
    <FormControlLabel   value="other" control={<Radio />} label="Other" />
  </RadioGroup>

</Grid>

<Grid item xs={12}>
    
<FormControl >
        <InputLabel >Select country</InputLabel>
        <Select
        name="country"
          value={this.state.country}
          onChange={this.handleData}
        >
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="China">china</MenuItem>
        </Select>
      </FormControl>

</Grid>
<Grid item xs={12} sm={12} md={12}>

    <Button
    onClick={this.submitData}
    color="secondary"
    variant="contained"
    fullWidth
    > SUBMIT </Button>

</Grid>

            </Grid>

        )
    }
}
