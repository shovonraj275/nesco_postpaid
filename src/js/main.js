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
    // let consumptionbd = (consumption);
    let load = document.getElementById("load").value;
    let loadbd = (load.toLocaleString("bn-BD"));
    console.log(loadbd);
    let loadCharge = 42;
    let loadChargeTotal = (loadCharge.toLocaleString("bn-BD"));
    let lf = 4.63;
    let one = 5.26;
    let two = 7.20;
    let three = 7.59;;
    let four = 8.02;
    let five = 12.76;
    let six = 14.61;
    let demandChargecount = load * loadCharge;
    let demandChargecountbd = (demandChargecount.toLocaleString("bn-BD"));
    console.log(demandChargecountbd);
    if(consumption <= 50){
        lf_1=(lf*consumption);
        bill="<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr><tr><td>লাইফ লাইন (০ থেকে ৫০)</td><td>"+lf+"</td><td>"+consumption+"</td><td> "+lf_1.toLocaleString("bn-BD")+" /= </td></tr><tr><td colspan="+"2"+">মোট </td><td>1</td><td>0</td></tr><tr><td colspan="+"2"+">ডিমান্ড চার্জ </td><td>1</td><td>" + demandChargecountbd + "</td></tr><tr><td colspan="+"2"+">ভ্যাট </td><td>1</td><td>0</td> </tr><tr><td colspan="+"2"+">সর্বমোট </td><td>1</td><td>0</td></tr> </table>";}
        else if(consumption > 50 && consumption <= 100){
            bill= lf_1;
        }
        
    console.log(bill);
    document.getElementById("output").innerHTML = bill;
}


let x = 512;
console.log(x.toLocaleString("bn-BD")); 
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