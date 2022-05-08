import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import DoctorList from './Component/DoctorList';
import FooterComponent from './Component/FooterComponent';
import CreateDoctor from './Component/CreateDoctor';
import UpdateDoctor from './Component/UpdateDoctor';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Menu from './Component/Menu';



function App() {
  return (
     <div>
     <HeaderComponent/>
     {/* <div className="App"> */}
   <Menu/>

<BrowserRouter>
<Switch>
      <Route  path='/DoctorList' exact component ={DoctorList}/>
      <Route path='/CreateDoctor' exact component ={CreateDoctor}/>
      <Route path='/UpdateDoctor' exact component ={UpdateDoctor}/>
      </Switch>
      </BrowserRouter>
     
         
        {/* <UpdateDoctor/>
     <CreateDoctor/>
      */}
    {/* </div> */}
    
     <FooterComponent/>
     </div>
     
  );
}

export default App;
