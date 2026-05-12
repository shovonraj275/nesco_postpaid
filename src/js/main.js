function count(){
    var finalEnlishToBanglaNumber={'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
    String.prototype.getDigitBanglaFromEnglish = function() {
    var retStr = this;
    for (var x in finalEnlishToBanglaNumber) {
         retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
    }
    return retStr;
    };
 
    let consumption = document.getElementById("consumption").value;
    var consumptionbd=consumption.getDigitBanglaFromEnglish();
    let load = document.getElementById("load").value;
    var loadbd=load.getDigitBanglaFromEnglish();
    console.log(loadbd);
    let loadCharge = 42;
    let loadChargebd=loadCharge.toLocaleString("bn-BD");
    // rate
    let lf = 4.63;
    let lfbd=lf.toLocaleString("bn-BD");
    let one = 5.26;
    let onebd=one.toLocaleString("bn-BD");
    let two = 7.20;
    let twobd=two.toLocaleString("bn-BD");
    let three = 7.59;;
    let threebd=three.toLocaleString("bn-BD");
    let four = 8.02;
    let fourbd=four.toLocaleString("bn-BD");
    let five = 12.76;
    let fivebd=five.toLocaleString("bn-BD");
    let six = 14.61;
    let sixbd=six.toLocaleString("bn-BD");
    // rate
    let demandChargecount = load * loadCharge;
    let demandChargecountbd = (demandChargecount.toLocaleString("bn-BD"));
    let empty=0;
    let emptybd=empty.toLocaleString("bn-BD");
    // let lf_1=(lf*consumption);
    // let subtotal = lf_1;
    // //    subtotal
    // var subtotalfix = subtotal.toFixed(0);
    // var subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    // // subtotal
    // // vat
    // let vat = (lf_1 + demandChargecount) * 0.05;
    // let vatfix = vat.toFixed(0);
    // let vatbd=vatfix.getDigitBanglaFromEnglish();
    // // vat
    // // total
    // let total = lf_1 + demandChargecount + vat;
    // var totalfix = total.toFixed(0);
    // var totalbd = totalfix.getDigitBanglaFromEnglish();
    // // total

    // console.log(demandChargecountbd);
    if(consumption <= 50){
        x=consumption*lf;
        y=x.toFixed(0);
        z=y.getDigitBanglaFromEnglish();
        console.log(z);

        table1="<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr><tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>"+lfbd+"</td><td>"+consumptionbd+"</td><td>"+z+" টাকা  </td></tr><tr><td colspan="+"3"+">মোট </td><td>"+0+" টাকা </td></table>";}
        else if(consumption > 50 && consumption <= 75){
        bill="<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr><tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>"+lfbd+"</td><td>"+emptybd+"</td><td><tr><td>প্রথম ধাপ (০ থেকে ৭৫)</td><td>"+onebd+"</td><td>"+consumptionbd+"</td><td>taka</td></tr> </td></tr><tr> </table>";;
        }
        
    // console.log(bill);
    document.getElementById("output").innerHTML = table1;
}


// let x = 5;</tr><tr><td colspan="+"3"+">ডিমান্ড চার্জ ("+loadbd+" কিলোওয়াট)</td><td>" + demandChargecountbd + " টাকা </td></tr><tr><td colspan="+"3"+">ভ্যাট (৫%) </td><td>" + vatbd + " টাকা </td> </tr><tr><td colspan="+"3"+">সর্বমোট </td><td class="+"total"+">" + totalbd + " টাকা </td></tr>

// console.log(x.toLocaleString("bn-BD")); 
{/* <td colspan="+"3"+">মোট </td><td>"+subtotalbd+" টাকা </td></tr><tr><td colspan="+"3"+">ডিমান্ড চার্জ ("+loadbd+" কিলোওয়াট)</td><td>" + demandChargecountbd + " টাকা </td></tr><tr><td colspan="+"3"+">ভ্যাট (৫%) </td><td>" + vatbd + " টাকা </td> </tr><tr><td colspan="+"3"+">সর্বমোট </td><td class="+"total"+">" + totalbd + " টাকা </td></tr> */}
 // let x= (consumption * 4.63);
    // let demandCharge = 0;
    // if(consumption <= 50){
    //     bill="<table><tr><td> (লাইফলাইন): </td><td>" + (consumption * 4.63) + " টাকা</td></tr> </table>";
    // }
    // else if(consumption > 50 && consumption <= 100){
    //     bill= "আপনার বিল হবে:লাইফলাইন (0-50)  " + (50 * 4.63 + (consumption - 50) * 7.09) + " টাকা";
    // }
    //   lf_1=(lf*50);
    //         one_1=(one*(consumption-50));
    //         bill="<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr><tr><td>লাইফ লাইন (০ থেকে ৫০)</td><td>"+lf+"</td><td>"+50+"</td><td> "+lf_1.toLocaleString("bn-BD")+" /= </td></tr><tr><td>ধাপ ১ (৫১ থেকে ১০০)</td><td>"+one+"</td><td>"+(consumption-50)+"</td><td> "+one_1.toLocaleString("bn-BD")+" /= </td></tr><tr><td colspan="+"2"+">মোট </td><td>1</td><td>0</td></tr><tr