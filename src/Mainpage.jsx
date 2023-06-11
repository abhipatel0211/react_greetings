import React from "react";
import './index.css';
import Greethere from "./Greethere";

// const div_style = {
  // color:'#ffe9c5',
  // margin : '50vh 50vw',
  // height : '50px',
  // width : '50px'
// }

// let greet="";
// const cssStyle = {};
// // let d = new Date(2022,10,26,9);
// let d = new Date();
// const a=d.getHours()
// console.log(a);
// if(d.getHours()<12 && d.getHours()>1)
// {
//   greet = "Good Morning";
//   cssStyle.color = 'green';
//   // cssStyle.backgroundColor = "#ef9505";
// }
// else if(d.getHours()>12 && d.getHours()<20)
// {
//   greet = "Good Afternoon";
//   cssStyle.color = 'orange';
//   // cssStyle.backgroundColor = "#ef9505";
// }
// else
// {
//   greet = "Good Night";
//   cssStyle.color = 'Black';
//   // cssStyle.backgroundColor = "#ef9505";
// }

function Mainpage(){
    return(
        <>
            <div>
                {/* <div > */}
                    {/* <h1>Hello sir,</h1>
                    hii */}
                    {/* <h1>Hello Sir, <span style={cssStyle}>{greet}</span></h1> */}
                    <h1>Hello Sir, <Greethere /></h1>
                {/* </div> */}
            </div>
        </>
    )
}
export default Mainpage;
