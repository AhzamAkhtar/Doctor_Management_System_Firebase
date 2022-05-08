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
    console.log("shahiddd callaing ")
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

  render() {
    return (
        <div ><h1 className='text-center'> DoctorList </h1>
        <div >
       
       
           <table style={{border: "1px solid black",position:"relative",marginLeft:"541px"}}>
             

             <thead  style={{border: "1px solid black"}}>
                <tr style={{border:"2px solid black"}}>
                    <th>  Doctor ID</th>

                    <th>  Doctor Name</th>
    
                    <th>  EmailId</th>
                    <th>  PhoneNo</th>

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
                                        </tr>
                                    )     
                       }
             </tbody>

           </table>

        



      </div></div>
    )
  }
}
