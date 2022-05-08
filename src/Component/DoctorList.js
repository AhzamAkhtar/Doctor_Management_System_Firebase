import axios from 'axios'
import React, { Component } from 'react'
import "./index.css"
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
export default class DoctorList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[],
         doctorDetails:"",
         isEdit:false,
         doctorAge: 0,
         doctorEmailId: "",
         doctorName: "",
        doctorPhoneNO: "",
        idDoctor: 0
      }
    }
componentDidMount=()=>{
    this.getDocterList()
} 

getDocterList=()=>{
    console.log("zaki callaing ")
    axios.get("http://localhost:8080/Doctor/getDoctorList")
    .then((response)=>{
        console.log("response success",response.data)
        this.setState({
            data:response.data
        })
    })
    .catch((error)=>{
        console.log(error)
    })
   
   


}
DeleteHandler=(id)=>{
  axios.delete("http://localhost:8080/Doctor/DeleteDoctor/"+id)
    .then((response)=>{
        console.log("response success",response.data)
        this.getDocterList();
    })
    .catch((error)=>{
        console.log(error)
    })
  }
  UpdateHandler=(data)=>{
console.log("zaki",data)
this.setState({
  isEdit:true,
doctorAge: data.doctorAge,
doctorEmailId: data.doctorEmailId,
doctorName:data.doctorName,
doctorPhoneNO: data.doctorPhoneNO,
idDoctor: data.idDoctor,

})
    // axios.post("http://localhost:8080/Doctor/getDoctorList/"+id)
    //   .then((response)=>{
    //       console.log("response success",response.data)
    //       //this.getDocterList();
    //       this.setState({
    //         doctorDetails: response.data,
    //         isEdit:true
    //       })
          
    //   })
    //   .catch((error)=>{
    //       console.log(error)
    //   })
  
}

EditHandler(doc){
  console.log("+++++++++++++", this.state);
  axios.put("http://localhost:8080/Doctor/updateDoctor",doc)
      .then((response)=>{
          console.log("response success",response.data)
           this.setState({
             isEdit: false,
           })
          this.getDocterList();
          
          
      })
      .catch((error)=>{
          console.log(error)
      })
}

onChange=(event)=>{
  this.setState({
      [event.target.name]:event.target.value
  })
}
  render() {
    return (

        <div ><h1 className='Text-center' style={{textAlign:"center",marginTop:"10px"}}> See Our World Class Doctors </h1>
        
  {this.state.isEdit===true?
    <div> <Container component="main" maxWidth="xs">
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
          Update Doctor
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
          <Button
          onClick={()=>this.EditHandler(this.state)}
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
         
        </Box>
      </Box>
    
    </Container></div>:
    <div >
       
       
           <table style={{border: "1px solid black",position:"relative",marginLeft:"400px"}}>
             

             <thead  style={{border: "1px solid black"}}>
                <tr style={{border:"2px solid black"}}>
                    <th  style={{border: "1px solid black"}}>  Doctor Id</th>

                    <th style={{border: "1px solid black"}}>  Doctor Name</th>
    
                    <th style={{border: "1px solid black"}}>  EmailId</th>
                    <th style={{border: "1px solid black"}}>  PhoneNo</th>
                    <th style={{border: "1px solid black"}}> E Actions</th>
                    <th style={{border: "1px solid black"}}>  Actions</th>
                    {/* <th>  Edit</th>
                    <th>  Delete</th> */}
                </tr>

             </thead>
             <tbody> {
             this.state.data.map(
                                        doctor => 
                                        <tr key = {doctor.idDoctor}>
                                             <td  style={{border: "1px solid black"}}> { doctor.idDoctor} </td>   
                                             <td style={{border: "1px solid black"}}>  { doctor.doctorName} </td>   
                                             <td style={{border: "1px solid black"}}>  {doctor.doctorEmailId}</td>
                                             <td style={{border: "1px solid black"}}>  {doctor.doctorPhoneNO}</td>
                                             <td style={{border: "1px solid black"}}><button onClick={()=>this.UpdateHandler(doctor)}> Update</button> </td>
                                             <td style={{border: "1px solid black"}}><button onClick={()=>this.DeleteHandler(doctor.idDoctor)}> Delete</button> </td>
                                        </tr>
                                    )     
                       }
             </tbody>

           </table>

           </div>
  }

</div>

    )
  }
    }
