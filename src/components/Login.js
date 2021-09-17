import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
       
        <Grid container>

            <Grid item xs={12} sm={6} md={6}>
<Typography> SignIn </Typography>

<TextField
type="text"
variant="outlined"
label="Username"
fullWidth
margin="normal"
required
/>

<TextField
required
margin="normal"
type="password"
variant="outlined"
label="Password"
fullWidth

/>

<Button
margin="normal"
type="submit"
fullWidth
variant="contained"
color="primary"
> LogIn </Button>


            </Grid>

            <Grid item xs={12} sm={6} md={6}>

<Typography> SignUp </Typography>

<TextField 
required
margin="normal"
type="text"
variant="outlined"
label="Name"
fullWidth
/>


<TextField 
required
margin="normal"
type="text"
variant="outlined"
label="Address"
fullWidth
/>

<TextField 
required
margin="normal"
type="text"
variant="outlined"
label="Email Id"
fullWidth
/>



<TextField
type="text"
variant="outlined"
label="Username"
fullWidth
margin="normal"
required
/>

<TextField
required
margin="normal"
type="password"
variant="outlined"
label="Password"
fullWidth

/>

<Button
margin="normal"
type="submit"
fullWidth
variant="contained"
color="secondary"
>
    SIGNUP
</Button>
            </Grid>


        </Grid>
            
         
    )
}
