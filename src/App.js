import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./Component/HeaderComponent";
import DoctorList from "./Component/DoctorList";
import FooterComponent from "./Component/FooterComponent";
import CreateDoctor from "./Component/CreateDoctor";
import UpdateDoctor from "./Component/UpdateDoctor";
import {BrowserRouter as Router ,Routes,Route,Link, BrowserRouter, HashRouter} from "react-router-dom";
import Menu from "./Component/Menu";
import Testimonal from "./Component/Testimonal";
import Appointment from "./Component/Appointment";
import News from "./Component/News";
import Map from "./Component/Map";
import TypeofAssistance from "./TypeofAssistance";
import General from "./Component/General";
import ConsultantPhysician from "./ConsultantPhysician";
import Gynecology from "./Component/Gynecology";
import Pediatrics from "./Component/Pediatrics";
import Dermatology from "./Component/Dermatology";
import Nutritioncounselling from "./Component/Nutritioncounselling";
import Orthopedics from "./Component/Orthopedics";
import Psychiatry from "./Component/Psychiatry";
import Allappointment from "./Component/Allappointment";
import Uupload from "./Component/Uupload";
import Upload from "./Component/Upload";
import NewBookingDoctor from "./Component/NewBookingDoctor";
function App() {
  return (
    <div>
      
      

    <HeaderComponent/>
    <BrowserRouter>

   <div>
      <Routes>
        <Route exact path="/" element={<Menu/>}/>
        <Route exact path="/createdoctor" element={<CreateDoctor/>}/>
        <Route exact path="/doctorlist" element={<DoctorList/>}/>
        <Route exact path="/TypeofAssistance" element={<TypeofAssistance/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/General" element={<General/>}/>
        <Route path="/ConsultantPhysician" element={<ConsultantPhysician/>}/>
        <Route path="/Gynecology" element={<Gynecology/>}/>
        <Route path="/Pediatrics" element={<Pediatrics/>}/>
        <Route path="/Dermatology" element={<Dermatology/>}/>
        <Route path="/Nutritioncounselling" element={<Nutritioncounselling/>}/>
        <Route path="/Orthopedics" element={<Orthopedics/>}/>
        <Route path="/Psychiatry" element={<Psychiatry/>}/>
        <Route path="/Allappointment" element={<Allappointment/>}/>
        <Route path="/Upload" element={<Upload/>}/>
        <Route path="/NewBookingDoctor" element={<NewBookingDoctor/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        {/* <Route path="*" element={<Errorpage/>}/> */}
      
     </Routes>
     </div>
   
     </BrowserRouter>
      

  
    


      {/*<UpdateDoctor/>
     <CreateDoctor/>
      */}
      {/* </div> */}

      
    
     <Map/>

      <Testimonal />
     <FooterComponent />
 
    </div>
  );
}

export default App;
