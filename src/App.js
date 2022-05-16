import logo from "./logo.svg";
import "./App.css";
import HeaderComponent from "./Component/HeaderComponent";
import DoctorList from "./Component/DoctorList";
import FooterComponent from "./Component/FooterComponent";
import CreateDoctor from "./Component/CreateDoctor";
import UpdateDoctor from "./Component/UpdateDoctor";
import {BrowserRouter as Router ,Routes,Route,Link} from "react-router-dom";
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
function App() {
  return (
    <div>
      

    <Router>
    <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/createdoctor" element={<CreateDoctor/>}/>
        <Route path="/doctorlist" element={<DoctorList/>}/>
        <Route path="/TypeofAssistance" element={<TypeofAssistance/>}/>
        <Route path="/Appointment" element={<Appointment/>}/>
        <Route path="/General" element={<General/>}/>
        <Route path="/ConsultantPhysician" element={<ConsultantPhysician/>}/>
        <Route path="/Gynecology" element={<Gynecology/>}/>
        <Route path="/Pediatrics" element={<Pediatrics/>}/>
        <Route path="/Dermatology" element={<Dermatology/>}/>
        <Route path="/Nutritioncounselling" element={<Nutritioncounselling/>}/>
        <Route path="/Orthopedics" element={<Orthopedics/>}/>
        <Route path="/Psychiatry" element={<Psychiatry/>}/>
      </Routes>
    </Router>

    


      {/* <UpdateDoctor/>
     <CreateDoctor/>
      */}
      {/* </div> */}
     <Map/>
      <News/>
      <Testimonal />
     <FooterComponent />
    </div>
  );
}

export default App;
