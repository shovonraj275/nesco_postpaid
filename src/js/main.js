// function count(){
//     let consumption = document.getElementById("consumption").value;
//     let load = document.getElementById("load").value;
//     // let x= (consumption * 4.63);
//     // let demandCharge = 0;
//     if(consumption <= 50){
//         bill="<table><tr><td> (লাইফলাইন): </td><td>" + (consumption * 4.63) + " টাকা</td></tr> </table>";
//     }
//     else if(consumption > 50 && consumption <= 100){
//         bill= "আপনার বিল হবে:লাইফলাইন (0-50)  " + (50 * 4.63 + (consumption - 50) * 7.09) + " টাকা";
//     }
//     console.log(consumption);
//     console.log(load);
//     document.getElementById("output").innerHTML = bill;
// }
bill = "<table><tr><td> (লাইফলাইন): </td><td>" +  + " টাকা</td></tr> </table>";
document.getElementById("output").innerHTML = bill;
