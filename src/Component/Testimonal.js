import { React } from "react";
import "./index.css"
const Testimonal = () => {
  return (
    <>
    <div style={{background:"rgb(2,35,73)"}}>
    <hr style={{height:"1.5px"}}/>
    <div style={{width:"100%",height:"50px",marginTop:"10px",textAlign:"center"}}>
    <h2 className="head2" style={{marginTop:"20px",color:"skyblue",fontWeight:"bolder"}}>Our Testimonals</h2>
    </div>
      <div class="container mt-5 mb-5">
    <div class="row g-2">
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/PKHvlRS.jpg" class="rounded-circle" width="80"/> </div>
                <div class="user-content">
                    <h5 class="mb-0">Bruce Hardy</h5> <span>Orthopedics Patient</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/w2CKRB9.jpg" class="rounded-circle" width="80"/> </div>
                <div class="user-content">
                    <h5 class="mb-0">Mark Smith</h5> <span>Heart Patient</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card p-3 text-center px-4">
                <div class="user-image"> <img src="https://i.imgur.com/ACeArwY.jpg" class="rounded-circle" width="80"/> </div>
                <div class="user-content">
                    <h5 class="mb-0">Veera Duncan</h5> <span>Dibetic Patient</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div class="ratings"> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}} class="fa fa-star"></i> <i style={{color:"black"}}    class="fa fa-star"></i> </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  );
};
export default Testimonal;
