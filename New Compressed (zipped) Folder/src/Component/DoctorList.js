import axios from 'axios'
import React, { Component } from 'react'


export default class DoctorList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data:[]
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
  UpdateHandler=(id)=>{
    axios.put("http://localhost:8080/Doctor/updateDoctor"+id)
      .then((response)=>{
          console.log("response success",response.data)
          this.getDocterList();
      })
      .catch((error)=>{
          console.log(error)
      })
  
}
  render() {
    return (

        <div ><h1 className='text-center'> DoctorList </h1>
        <div >
       
       
           <table style={{border: "1px solid black",position:"relative",marginLeft:"400px"}}>
             

             <thead  style={{border: "1px solid black"}}>
                <tr style={{border:"2px solid black"}}>
                    <th>  Doctor Id</th>

                    <th>  Doctor Name</th>
    
                    <th>  EmailId</th>
                    <th>  PhoneNo</th>
                    <th>  Edit</th>
                    <th>  Delete</th>
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
                                             <td><button onClick={()=>this.UpdateHandler(doctor.idDoctor)}> Update</button> </td>
                                             <td><button onClick={()=>this.DeleteHandler(doctor.idDoctor)}> Delete</button> </td>
                                        </tr>
                                    )     
                       }
             </tbody>

           </table>

          



      </div></div>
    )
  }
    }
