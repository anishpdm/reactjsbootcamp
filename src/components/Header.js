import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar> 
                        <Typography>  Link Ur Codes  </Typography>
                        
                        
                        <Link to="/">  Add Course  </Link> 
                        <Link to="/viewcourse"> View Course </Link>
                         </Toolbar>
                </AppBar>
            </div>
        )
    }
}
