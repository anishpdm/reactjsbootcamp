import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class News extends Component {

    state={
        news:[]
    }
    fetchNews=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(

        (response)=>{
            console.log(response.data.articles)
            this.setState({
                news:response.data.articles
            })
        }

        )
    }
    render() {
        return (
            <div>
                <Grid container>

                    <Grid item xs={12} sm={12} md={12}>
                        <Button
                        fullWidth
                        variant="contained"
                        onClick={this.fetchNews}
                        color="secondary">
                            
                            Fetch latest news
                        </Button>
                         </Grid>
                    <Grid item xs={12} sm={12} md={12}> 
                    
                    <TableContainer>
             <Table>
                 <TableHead>
                    <TableRow>
                    <TableCell> Image</TableCell>

                    <TableCell> Published Date </TableCell>
                    <TableCell> Head Line </TableCell>
                    <TableCell> Small Description </TableCell>
                    <TableCell> Detailed Description </TableCell>
                     </TableRow>
                 </TableHead>
                 <TableBody>

{this.state.news.map( (value,index)=>{
    return <TableRow>

<TableCell> <Avatar variant="square" src={value.urlToImage} /> </TableCell>

<TableCell> {value.publishedAt} </TableCell>
                    <TableCell> {value.title}</TableCell>
                    <TableCell> {value.description} </TableCell>
                    <TableCell> {value.content} </TableCell>

        </TableRow>
} )}
                 </TableBody>   

 </Table>
 </TableContainer>            </Grid>

                </Grid>
            </div>
        )
    }
}
