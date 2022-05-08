import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Component/HeaderComponent';
import DoctorList from './Component/DoctorList';
import FooterComponent from './Component/FooterComponent';
import CreateDoctor from './Component/CreateDoctor';

function App() {
  return (
     <div>
     <HeaderComponent/>
     <div className="App">
          {/* <DoctorList/>  */}
     <CreateDoctor/>
    </div>
     <FooterComponent/>
     </div>
     
  );
}

export default App;
