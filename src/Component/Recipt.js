import React from "react";
import jsPDF from "jspdf";
const Recipt=()=>{
    var doc = new jsPDF("p","pt")
    doc.setFont("courier")
    doc.text(20,30,"Hello")
    return(
        <>
            <button onClick={()=>{
                doc.save("testing.pdf")
            }}>jenerate</button>
        </>
    )
}
export default Recipt
