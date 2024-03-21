import React from 'react'
import employeebanner from "../images/employeebanner.avif"
import "../styles/employeestyle.css"
import Layout from '../components/Layout/Layout'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  
} from "@mui/material";


const Employee = () => {
  return (
   <Layout>
    <div className="employee" style={{backgroundImage: `url(${employeebanner})` }}>
     
       <br/> <br/>
      <div className="form-card">

         <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
       
          <Card sx={{ Width: "390px", display: "flex"}}>
            <CardActionArea>
              <CardMedia><br/> <br/>
              <div className="form-container" style={{textAlign:"center"}}>
              <Typography variant="h4" gutterBottom >
              Employee-Form
              </Typography>
              
              <CardContent> <br/>
              <TextField id="filled-basic" label="Name" variant="filled" /> <br/> <br/>
              <TextField id="filled-basic" label="Salary" variant="filled" /> <br/> <br/>
              <TextField id="filled-basic" label="Location " variant="filled" /> <br/> <br/>
              <TextField id="filled-basic" label="Destination" variant="filled" />
              
              </CardContent>
              </div>
              </CardMedia>
            </CardActionArea>
          </Card>
        
          </Box>
        </div>

      <br/> <br/> <br/> <br/> <br/> <br/>
      </div>
     
   </Layout>
    
  )
}

export default Employee