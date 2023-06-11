import React from "react";


let greet="";
const cssStyle = {};
// let d = new Date(2022,10,26,9);
let d = new Date();
const a=d.getHours()
console.log(a);
if(d.getHours()<12 && d.getHours()>1)
{
  greet = "Good Morning";
  cssStyle.color = 'green';
  // cssStyle.backgroundColor = "#ef9505";
}
else if(d.getHours()>12 && d.getHours()<20)
{
  greet = "Good Afternoon";
  cssStyle.color = 'orange';
  // cssStyle.backgroundColor = "#ef9505";
}
else
{
  greet = "Good Night";
  cssStyle.color = 'Black';
  // cssStyle.backgroundColor = "#ef9505";
}


function Greethere(){
    return (
        <span style={cssStyle}>{greet}</span>
    )
}

export default Greethere; 


