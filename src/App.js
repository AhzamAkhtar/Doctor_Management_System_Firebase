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
