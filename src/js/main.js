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
        lfc=consumption*lf;
        ifcbd=lfc.toLocaleString("bn-BD");
        subtotal=lfc;
        subtotalfix=subtotal.toFixed(0);
        subtotalbd=subtotalfix.getDigitBanglaFromEnglish();
        // subtotalbd=ifc.toFixed(0).getDigitBanglaFromEnglish();
        // lfc y=x.toFixed(0);
        // z=y.getDigitBanglaFromEnglish();
        // console.log(z);

        table_2="<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>"+lfbd+"</td><td>"+consumptionbd+"</td><td>"+ifcbd+" টাকা  </td></tr><tr><td colspan="+"3"+">মোট </td><td>"+subtotalbd+" টাকা </td>";
    }
        else if(consumption >= 50 && consumption <= 75){
        lfc=consumption*one;
        ifcbd=lfc.toLocaleString("bn-BD");
        subtotal=lfc;
        subtotalfix=subtotal.toFixed(0);
        subtotalbd=subtotalfix.getDigitBanglaFromEnglish();
        table_2="<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>"+lfbd+"</td><td>"+emptybd+"</td><td>"+emptybd+" টাকা  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>"+onebd+"</td><td>"+consumptionbd+"</td><td>"+ifcbd+"</td></tr>  </tr><tr><td colspan="+"2"+">মোট </td><td>"+consumptionbd+"</td><td>"+subtotalbd+" টাকা </td>";
        }
        else if(consumption >= 76 && consumption <= 200){
        lfc= (consumption-75)*two + (75*one);
        first=75;
        firstbd=first.toLocaleString("bn-BD");
        firstval=first*one;
        firstvalbd=firstval.toLocaleString("bn-BD");
        second=consumption-first;
        secondval=(consumption-75)*two;
        secondbd=second.toLocaleString("bn-BD");
        secondvalbd=secondval.toLocaleString("bn-BD");
        console.log(second);
        ifcbd=lfc.toLocaleString("bn-BD");
        subtotal=lfc;
        subtotalfix=subtotal.toFixed(0);
        subtotalbd=subtotalfix.getDigitBanglaFromEnglish();
        table_2="<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>"+lfbd+"</td><td>"+emptybd+"</td><td>"+emptybd+" টাকা  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>"+onebd+"</td><td>"+firstbd+"</td><td>"+firstvalbd+"</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>"+twobd+"</td><td>"+secondbd+"</td><td>"+secondvalbd+"</td></tr><tr><td colspan="+"2"+">মোট </td><td>"+consumptionbd+"</td><td>"+subtotalbd+" টাকা </td>";
        }
    vat= (subtotal + demandChargecount) * 0.05;
    vatfix=vat.toFixed(0);
    vatbd= vatfix.getDigitBanglaFromEnglish();
    total=(vat+vat+subtotal+demandChargecount);
    totalfix=total.toFixed(0);
    totalbd= totalfix.getDigitBanglaFromEnglish();

    // console.log(subtotalfix)
    // console.log(demandChargecount)
    // console.log(vatfix)
    // document.getElementById("output2").innerHTML =totalbd;
    table_1= "<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr>";
    table_3 = "</tr><tr><td colspan="+"3"+">ডিমান্ড চার্জ ("+loadbd+" কিলোওয়াট)</td><td>" + demandChargecountbd + " টাকা </td></tr><tr><td colspan="+"3"+">ভ্যাট (৫%) </td><td>" + vatbd + " টাকা </td> </tr><tr><td colspan="+"3"+">সর্বমোট </td><td class="+"total"+">" + totalbd + " টাকা </td></tr></table>";
    // console.log(z);
    document.getElementById("output").innerHTML = table_1 + table_2 + table_3;
}


// let x = 5;

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