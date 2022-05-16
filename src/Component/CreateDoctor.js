import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import swal from 'sweetalert';
import "./index.css"
export default class CreateDoctor extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         idDoctor:"",
        doctorName:"",
         doctorAge:"",
        doctorPhoneNO:"",
        doctorEmailId:""
      }
    }


    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    submitHandler=()=>{
       swal("CONGRATULATIONS!" + "You Have Successfully Become A Doctor")
        console.log("submit handler calling",this.state )
        axios.post("http://localhost:8080/Doctor/CreateDoctor",this.state)
        .then((response)=>{
            alert("Doctor is Created")
            this.setState({
                doctorName:"",
                doctorAge:"",
               doctorPhoneNO:"",
               doctorEmailId:""
            })
        })
        .catch((error)=>{
            console.log(error)
        })

    }
  render() {
    return (
      <div className='main_div'> <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Become a Doctor
        </Typography>
        <Box component="form" noValidate  sx={{ mt: 3 }}>
          <Grid container spacing={2}>
           
            <Grid item xs={12} >
              <TextField
              onChange={this.onChange}
                required
                fullWidth
               value={this.state.doctorName}
                label="Doctor Name"
                name="doctorName"
                autoComplete="family-name"
              />
            </Grid>
            
            <Grid item xs={12} >
              <TextField
              onChange={this.onChange}
                required
                fullWidth
                type="number"
                value={this.state.doctorPhoneNO}
                label="Doctor phone"
                name="doctorPhoneNO"
               
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={this.onChange}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="doctorEmailId"
                value={this.state.doctorEmailId}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
              onChange={this.onChange}
                required
                fullWidth
                type="number"
                value={this.state.doctorAge}
                label="Doctor Age"
                name="doctorAge"
                
              
               
              />
            </Grid>
           
          </Grid>
          <Button style={{borderRadius:"50px",backgroundColor:"purple"}}
          onClick={this.submitHandler}
            type="button"
            fullWidth
            variant="contained"
            
            sx={{ mt: 3, mb: 2 }}
            
          >
            Create
          </Button>
         
        </Box>
      </Box>
    
    </Container></div>
    )
  }
}
