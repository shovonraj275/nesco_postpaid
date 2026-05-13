function count() {
    var finalEnlishToBanglaNumber = {
        '0': '০',
        '1': '১',
        '2': '২',
        '3': '৩',
        '4': '৪',
        '5': '৫',
        '6': '৬',
        '7': '৭',
        '8': '৮',
        '9': '৯'
    };
    String.prototype.getDigitBanglaFromEnglish = function () {
        var retStr = this;
        for (var x in finalEnlishToBanglaNumber) {
            retStr = retStr.replace(new RegExp(x, 'g'), finalEnlishToBanglaNumber[x]);
        }
        return retStr;
    };
    let consumption = document.getElementById("consumption").value;
    var consumptionbd = consumption.getDigitBanglaFromEnglish();
    let load = document.getElementById("load").value;
    var loadbd = load.getDigitBanglaFromEnglish();
    let loadCharge = 42;
    let loadChargebd = loadCharge.toLocaleString("bn-BD");
    // rate
    let lf = 4.63;
    let lfbd = lf.toLocaleString("bn-BD");
    let one = 5.26;
    let onebd = one.toLocaleString("bn-BD");
    let first = 75;
    let firstbd = first.toLocaleString("bn-BD");
    let firstval = first * one;
    let firstvalbd = firstval.toLocaleString("bn-BD");
    let two = 7.20;
    let twobd = two.toLocaleString("bn-BD");
    let second = consumption - first;
    let secondUp = 125;
    let secondUpbd = secondUp.toLocaleString("bn-BD");
    let secondupval = (125 * two);
    let secondupvalbd = secondupval.toLocaleString("bn-BD");
    let secondval = (consumption - 75) * two;
    let secondbd = second.toLocaleString("bn-BD");
    let secondvalbd = secondval.toLocaleString("bn-BD");
    let three = 7.59;;
    let threebd = three.toLocaleString("bn-BD");
    let third = consumption - 200;
    let thirdbd = third.toLocaleString("bn-BD");
    let thirdval = (consumption - 200) * three;
    let thirdvalbd = thirdval.toLocaleString("bn-BD");
    let thirddUp = 100;
    let thirddUpbd = thirddUp.toLocaleString("bn-BD");
    let thirdupval = (100 * three);
    let thirdupvalbd = thirdupval.toLocaleString("bn-BD");
    let four = 8.02;
    let fourbd = four.toLocaleString("bn-BD");
    let fourth = consumption - 300;
    let fourthbd = fourth.toLocaleString("bn-BD");
    let fourthval = (consumption - 300) * four;
    let fourthvalbd = fourthval.toLocaleString("bn-BD");
    let fourthUp = 100;
    let fourthUpbd = fourthUp.toLocaleString("bn-BD");
    let fourupval = (100 * four);
    let fourthupvalbd = fourupval.toLocaleString("bn-BD");
    let five = 12.76;
    let fivebd = five.toLocaleString("bn-BD");
    let fifth = consumption - 400;
    let fifthbd = fifth.toLocaleString("bn-BD");
    let fifthval = (consumption - 400) * five;
    let fifthvalbd = fifthval.toLocaleString("bn-BD");
    let fifthUp = 100;
    let fifthUpbd = fifthUp.toLocaleString("bn-BD");
    let fifththupval = (100 * five);
    let fifthupvalbd = fifththupval.toLocaleString("bn-BD");
    let six = 14.61;
    let sixbd = six.toLocaleString("bn-BD");
    let sixth = consumption - 600;
    let sixthbd = sixth.toLocaleString("bn-BD");
    let sixthval = (consumption - 600) * six;
    let sixthvalbd = sixthval.toLocaleString("bn-BD");
    let demandChargecount = load * loadCharge;
    let demandChargecountbd = (demandChargecount.toLocaleString("bn-BD"));
    let empty = 0;
    let emptybd = empty.toLocaleString("bn-BD");
    if (consumption <= 50) {
        // life line charge
        lfc = consumption * lf;
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + consumptionbd + "</td><td>" + ifcbd + " টাকা  </td></tr><tr><td colspan=" + "3" + ">মোট </td><td>" + subtotalbd + " টাকা </td>";
    } else if (consumption >= 50 && consumption <= 75) {
        // 1st step charge
        lfc = consumption * one;
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + consumptionbd + "</td><td>" + ifcbd + "</td></tr>  </tr><tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    } else if (consumption >= 76 && consumption <= 200) {
        // 2nd step charge
        lfc = (consumption - 75) * two + (75 * one);
        console.log(second);
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + firstbd + "</td><td>" + firstvalbd + "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" + twobd + "</td><td>" + secondbd + "</td><td>" + secondvalbd + "</td></tr><tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    } else if (consumption >= 201 && consumption <= 300) {
        // 3nd step charge
        lfc = (consumption - 200) * three + (200 - 75) * two + (75 * one);
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + firstbd + "</td><td>" + firstvalbd + "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" + twobd + "</td><td>" + secondUpbd + "</td><td>" + secondupvalbd + "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" + threebd + "</td><td>" + thirdbd + "</td><td>" + thirdvalbd + "</td></tr><tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    } else if (consumption >= 301 && consumption <= 400) {
        // 4th step charge
        lfc = (consumption - 300) * four + (300 - 200) * three + (200 - 75) * two + (75 * one);
        console.log(second);
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + firstbd + "</td><td>" + firstvalbd + "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" + twobd + "</td><td>" + secondUpbd + "</td><td>" + secondupvalbd + "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" + threebd + "</td><td>" + thirddUpbd + "</td><td>" + thirdupvalbd + "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" + fourbd + "</td><td>" + fourthUpbd + "</td><td>" + fourthupvalbd + "</td></tr><tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    } else if (consumption >= 401 && consumption <= 600) {
        // 5th step charge
        lfc = (consumption - 400) * five + (400 - 300) * four + (300 - 200) * three + (200 - 75) * two + (75 * one);
        console.log(second);
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + firstbd + "</td><td>" + firstvalbd + "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" + twobd + "</td><td>" + secondUpbd + "</td><td>" + secondupvalbd + "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" + threebd + "</td><td>" + thirddUpbd + "</td><td>" + thirdupvalbd + "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" + fourbd + "</td><td>" + fourthUpbd + "</td><td>" + fourthupvalbd + "</td></tr><tr><td>পঞ্চম ধাপ <br/> (৪০১ থেকে ৬০০) </td><td>" + fivebd + "</td><td>" + fifthbd + "</td><td>" + fifthvalbd + "</td></tr><tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    } else if (consumption >= 601) {
        // 6th step charge
        lfc = (consumption - 600) * six + (600 - 400) * five + (400 - 300) * four + (300 - 200) * three + (200 - 75) * two + (75 * one);
        ifcbd = lfc.toLocaleString("bn-BD");
        subtotal = lfc;
        subtotalfix = subtotal.toFixed(0);
        subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
        table_2 = "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" + lfbd + "</td><td>" + emptybd + "</td><td>" + emptybd + "  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" + onebd + "</td><td>" + firstbd + "</td><td>" + firstvalbd + "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" + twobd + "</td><td>" + secondUpbd + "</td><td>" + secondupvalbd + "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" + threebd + "</td><td>" + thirddUpbd + "</td><td>" + thirdupvalbd + "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" + fourbd + "</td><td>" + fourthUpbd + "</td><td>" + fourthupvalbd + "</td></tr><tr><td>পঞ্চম ধাপ <br/> (৪০১ থেকে ৬০০) </td><td>" + fivebd + "</td><td>" + fifthUpbd + "</td><td>" + fifthupvalbd + "</td></tr><tr><td>ষষ্ট ধাপ <br/> (৬০১ এর  উপরে) </td><td>" + sixbd + "</td><td>" + sixthbd + "</td><td>" + sixthvalbd + "</td></tr> <tr><td colspan=" + "2" + ">মোট </td><td>" + consumptionbd + "</td><td>" + subtotalbd + "  </td>";
    }
    vat = (subtotal + demandChargecount) * 0.05;
    vatfix = vat.toFixed(0);
    vatbd = vatfix.getDigitBanglaFromEnglish();
    total = (vat + vat + subtotal + demandChargecount);
    totalfix = total.toFixed(0);
    totalbd = totalfix.getDigitBanglaFromEnglish();
    table_1 = "<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr>";
    table_3 = "</tr><tr><td colspan=" + "3" + ">ডিমান্ড চার্জ (" + loadbd + " কিলোওয়াট)</td><td>" + demandChargecountbd + " </td></tr><tr><td colspan=" + "3" + ">ভ্যাট (৫%) </td><td>" + vatbd + "  </td> </tr><tr><td colspan=" + "3" + ">সর্বমোট </td><td class=" + "total" + ">" + totalbd + " </td></tr></table>";
    // console.log(z);
    document.getElementById("output").innerHTML = table_1 + table_2 + table_3;
}