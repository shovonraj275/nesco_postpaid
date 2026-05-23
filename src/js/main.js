var grids = document.getElementById("gridss");
var solor = document.getElementById("solar");
var both = document.getElementById("both");
var btnactivecor = document.getElementsByClassName("btn");
function gridout() {
  grids.style.display = "block";
  solor.style.display = "none";
  both.style.display = "none";
  btnactivecor[0].classList.add("btn_activea");
  btnactivecor[1].classList.remove("btn_active");
  btnactivecor[2].classList.remove("btn_active");
}
function solorOutput() {
  grids.style.display = "none";
  solor.style.display = "block";
  both.style.display = "none";
  btnactivecor[0].classList.remove("btn_active");
  btnactivecor[1].classList.add("btn_active");
  btnactivecor[2].classList.remove("btn_active");
}
function bothOutput() {
  grids.style.display = "none";
  solor.style.display = "none";
  both.style.display = "block";
  btnactivecor[0].classList.remove("btn_active");
  btnactivecor[1].classList.remove("btn_active");
  btnactivecor[2].classList.add("btn_active");
}

function numberToBanglaWords(num) {
  const units = [
    "",
    "এক",
    "দুই",
    "তিন",
    "চার",
    "পাঁচ",
    "ছয়",
    "সাত",
    "আট",
    "নয়",
  ];
  // const teens = ['দশ 1144444', 'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোলো', 'সতেরো', 'আঠারো', 'ঊনিশ'];q`
  const teentdss = [
    "",
    "এক",
    "দুই",
    "তিন",
    "চার",
    "পাঁচ",
    "ছয়",
    "সাত",
    "আট",
    "নয়",
    "দশ",
    "এগারো",
    "বারো",
    "তেরো",
    "চৌদ্দ",
    "পনেরো",
    "ষোলো",
    "সতেরো",
    "আঠারো",
    "ঊনিশ",
    "বিশ ",
    "একুশ",
    "বাইশ",
    "তেইশ",
    "চব্বিশ",
    "পঁচিশ",
    "ছাব্বিশ",
    "সাতাশ",
    "আটাশ",
    "উনত্রিশ",
    "ত্রিশ",
    "একত্রিশ",
    "বত্রিশ",
    "তেত্রিশ",
    "চৌত্রিশ",
    "পঁইত্রিশ",
    "ছত্রিশ",
    "সাঁইত্রিশ",
    "আটত্রিশ",
    "উনচল্লিশ",
    "চল্লিশ",
    "একচল্লিশ",
    "বিয়াল্লিশ",
    "তেতাল্লিশ",
    "চুয়াল্লিশ",
    "পঁয়তাল্লিশ",
    "ছিচল্লিশ",
    "সাতচল্লিশ",
    "আটচল্লিশ",
    "উনপঞ্চাশ",
    "পঞ্চাশ",
    "একান্ন",
    "বায়ান্ন",
    "তিয়ান্ন",
    "চুয়ান্ন",
    "পঞ্চান্ন",
    "ছাপান্ন",
    "সাতান্ন",
    "আটান্ন",
    "উনষাট",
    "ষাট",
    "একষাট",
    "বাষট্টি",
    "তেষট্টি",
    "চৌষট্টি",
    "পঁইষট্টি",
    "ছেষট্টি",
    "সাতষট্টি",
    "আটষট্টি",
    "উনসত্তর",
    "সত্তর",
    "একাত্তর",
    "বাহাত্তর",
    "তিয়াত্তর",
    "চুয়াত্তর",
    "পঁইত্তর",
    "ছিয়াত্তর",
    "সাতাত্তর",
    "আটাত্তর",
    "উনআশি",
    "আশি",
    "একাশি",
    "বিরাশি",
    "তিরাশি",
    "চুরাশি",
    "পঁইরাশি",
    "ছিয়াশি",
    "সাতাশি",
    "আটাশি",
    "উননব্বই",
    "নব্বই",
    "একানব্বই",
    "বিরানব্বই",
    "তিরানব্বই",
    "চুরানব্বই",
    "পঁচ্চানব্বই",
    "ছিয়ানব্বই",
    "সাতানব্বই",
    "আটানব্বই",
    "নিরানব্বই",
  ];

  const tens = [
    "",
    "দশ",
    "বিশ",
    "ত্রিশ ",
    "চল্লিশ ",
    "পঞ্চাশ",
    "ষাট",
    "সত্তর",
    "আশি",
    "নব্বই",
  ];

  if (num === 0) return "শূন্য";
  // if (num < 10) return units[num] + '  টাকা মাত্র।';
  if (num < 100) return teentdss[num] + " টাকা মাত্র।"; //11to 19
  // if (num < 20) return teens[num - 10]+ ' টাকা 10 teens মাত্র।'; //11to 19
  // if (num < 30) return teens20[num - 20]+ ' টাকা 20 মাত্র। দশক'; //11to 19
  // if (num < 40) return teens30[num - 30]+ ' টাকা 30 40000 মাত্র। দশক'; //11to 19

  if (num < 100)
    return (
      tens[Math.floor(num / 10)] +
      (num % 10 !== 0 ? " " + units[num % 10] : "" + " tens টাকা ss মাত্র।")
    ); //10,20,30
  if (num < 1000)
    return (
      units[Math.floor(num / 100)] +
      "শত " +
      (num % 100 !== 0 ? numberToBanglaWords(num % 100) : "")
    );
  if (num < 100000)
    return (
      teentdss[Math.floor(num / 1000)] +
      " হাজার    " +
      (num % 1000 !== 0 ? numberToBanglaWords(num % 1000) : "")
    );
  if (num < 10000000)
    return (
      teentdss[Math.floor(num / 100000)] +
      " লাক্ষ   " +
      (num % 100000 !== 0 ? numberToBanglaWords(num % 100000) : "")
    );
  if (num < 1000000000)
    return (
      teentdss[Math.floor(num / 10000000)] +
      " কোটি   " +
      (num % 10000000 !== 0 ? numberToBanglaWords(num % 10000000) : "")
    );

  return num; // Extendable for thousands/lakhs
}
const options = {
  timeZone: "Asia/Dhaka",
  dateStyle: "full",
  timeStyle: "medium",
};
const banglaTime = new Intl.DateTimeFormat("bn-BD", options).format(new Date());
//!! console.log(banglaTime);
document.getElementById("time").innerHTML += `<h1>${banglaTime}</h1>`;
var lifeRate = 4.63;
var lifeRatebd = lifeRate.toLocaleString("bn-BD");
var firststRate = 5.26;
var firststRateBD = firststRate.toLocaleString("bn-BD");
var secondRate = 7.2;
var secondRateBD = secondRate.toLocaleString("bn-BD");
var thirdRate = 7.59;
var thirdRateBD = thirdRate.toLocaleString("bn-BD");
var fourthRate = 8.02;
var fourthRateBD = fourthRate.toLocaleString("bn-BD");
var fifthRate = 12.67;
var fifthRateBD = fifthRate.toLocaleString("bn-BD");
var sixthRate = 14.61;
var sixthRateBD = sixthRate.toLocaleString("bn-BD");
//! first second third fourth fifth sixth seventh
function count() {
  var consumptionvalinput = document.getElementById("consumption").value;
  let consumptionvalinputNum = Number(consumptionvalinput);
  var consumptionvalinputbd = consumptionvalinputNum.toLocaleString("bn-BD");
  var laovalinputvalinput = document.getElementById("load").value;
  let laovalinputvalinputNum = Number(laovalinputvalinput);
  var laovalinputvalinputbd = laovalinputvalinputNum.toLocaleString("bn-BD");
  // ! damang Chrag
  let demangChageRte = 42;
  let demangChageValue = demangChageRte * laovalinputvalinput;
  let demangChageValueBd = demangChageValue.toLocaleString("bn-BD");
  function rate(rete, val) {
    return rete * val;
  }
  //  ? value input
  // ? rete and bd
  // todo comoleted
  // todo empy and defult value
  let empyvalue = "0";
  let Hightvalue = "100";
  // todo empy and defult value
  if (consumptionvalinput <= 50) {
    usedLife = consumptionvalinput;
  } else usedLife = empyvalue;
  usedLifeNum = Number(usedLife);
  let usedLifebd = usedLifeNum.toLocaleString("bn-BD");
  let lifeLineVale = rate(lifeRate, usedLife);
  let lifeLineValeBd = lifeLineVale.toLocaleString("bn-BD");
  // ! LIFE first
  if (consumptionvalinput < 51) {
    firstval = empyvalue;
  } else if (consumptionvalinput >= 51 && consumptionvalinput <= 75) {
    firstval = consumptionvalinput;
  } else firstval = 75;
  // ! first second
  if (consumptionvalinput <= 75) {
    secondval = 0;
  } else if (consumptionvalinput >= 76 && consumptionvalinput < 200) {
    secondval = consumptionvalinput - 75;
  } else secondval = 125;
  // !second & third
  if (consumptionvalinput <= 200) {
    thirdval = 0;
  } else if (consumptionvalinput >= 201 && consumptionvalinput < 300) {
    thirdval = consumptionvalinput - 200;
  } else thirdval = 100;
  // !  third & fourth
  if (consumptionvalinput <= 300) {
    fourthval = 0;
  } else if (consumptionvalinput >= 301 && consumptionvalinput < 400) {
    fourthval = consumptionvalinput - 300;
  } else fourthval = 100;
  // !  fourth & fifth
  if (consumptionvalinput <= 400) {
    fifthval = 0;
  } else if (consumptionvalinput >= 401 && consumptionvalinput < 600) {
    fifthval = consumptionvalinput - 400;
  } else fifthval = 200;
  // !  fifth & sixth
  if (consumptionvalinput <= 600) {
    sixthval = 0;
  } else sixthval = consumptionvalinput - 600;
  // ! sixth
  let firstNum = Number(firstval);
  let firstvalbBd = firstNum.toLocaleString("bn-BD");
  let firststvalRate = rate(firststRate, firstval);
  let firststvalRateBd = firststvalRate.toLocaleString("bn-BD");
  let secondvalbd = secondval.toLocaleString("bn-BD");
  let secondvalRate = rate(secondRate, secondval);
  let secondvalRatebd = secondvalRate.toLocaleString("bn-BD");
  let thirdvalBd = thirdval.toLocaleString("bn-BD");
  let thirdvalRate = rate(thirdval, thirdRate);
  let thirdvalRateBd = thirdvalRate.toLocaleString("bn-BD");
  let fourthvalBd = fourthval.toLocaleString("bn-BD");
  let fourthvalRate = rate(fourthval, fourthRate);
  let fourthvalRateBd = fourthvalRate.toLocaleString("bn-BD");
  let fifthvalBd = fifthval.toLocaleString("bn-BD");
  let fifthvalRate = rate(fifthval, fifthRate);
  let fifthvalRateBd = fifthvalRate.toLocaleString("bn-BD");
  let sixthvalBd = sixthval.toLocaleString("bn-BD");
  let sixthvalRate = rate(sixthval, sixthRate);
  let sixthvalRateBd = sixthvalRate.toLocaleString("bn-BD");
  //! first second third fourth fifth sixth seventh
  //  ! value indifyer
  // ?total subtotla $ vat
  let subtotoal =
    lifeLineVale +
    firststvalRate +
    secondvalRate +
    thirdvalRate +
    fourthvalRate +
    fifthvalRate +
    sixthvalRate;
  console.log(subtotoal);
  let subtotoalFx = subtotoal.toFixed(0);
  let subtotoalNum = Number(subtotoalFx);
  let subtotoalBd = subtotoalNum.toLocaleString("bn-BD");
  let vatc = subtotoal + demangChageValue;
  let vat = vatc * 0.05;
  let vatFix = vat.toFixed();
  let vatFixNum = Number(vatFix);
  let vatbd = vatFixNum.toLocaleString("bn-BD");
  let total = subtotoal + demangChageValue + vat;
  let totalFix = total.toFixed();
  let totalFixNum = Number(totalFix);
  let totalbd = totalFixNum.toLocaleString("bn-BD");
  let word = numberToBanglaWords(totalFixNum);
  bill = ` <table>
        <tr>
          <th>ধাপ</th>
          <th>মূল্যহার</th>
          <th>ব্যবহৃত ইউনিট</th>
          <th>এনাজি চার্জ</th>
        </tr>
        <tr>
          <td>লাইফ লাইন <br/> (০ থেকে ৫০)</td>
          <td>${lifeRatebd}</td>
          <td>${usedLifebd}</td>
          <td>${lifeLineValeBd}</td>
        </tr>
        <tr>
          <td>ধাপ ১ <br />(৫১ থেকে ৭৫)</td>
          <td>${firststRateBD}</td>
          <td>${firstvalbBd}</td>
          <td>${firststvalRateBd}</td>
        </tr>
        <tr>
          <td>দ্বিতীয় ধাপ <br />(৭৬ থেকে ২০০)</td>
          <td>${secondRateBD}</td>
          <td>${secondvalbd}</td>
          <td>${secondvalRatebd}</td>
        </tr>
        <tr>
          <td>তৃতীয় ধাপ <br />(২০১ থেকে ৩০০)</td>
          <td>${thirdRateBD}</td>
          <td>${thirdvalBd}</td>
          <td>${thirdvalRateBd}</td>
        </tr>
        <tr>
          <td>চতুর্থ ধাপ <br />(৩০১ থেকে ৪০০)</td>
          <td>${fourthRateBD}</td>
          <td>${fourthvalBd}</td>
          <td>${fourthvalRateBd}</td>
        </tr>
        <tr>
          <td>পঞ্চম ধাপ <br />(৪০১ থেকে ৬০০)</td>
          <td>${fifthRateBD}</td>
          <td>${fifthvalBd}</td>
          <td>${fifthvalRateBd} </td>
        </tr>
        <tr>
          <td>ষষ্ট ধাপ <br />(৬০১ এর উপরে )</td>
          <td>${sixthRateBD}</td>
          <td>${sixthvalBd}</td>
          <td>${sixthvalRateBd}</td>
        </tr>
        <tr>
          <td colspan="2 ">মোট</td>
          <td>${consumptionvalinputbd}  ইউনিট</td>
          <td>${subtotoalBd}</td>
        </tr>
        <tr>
          <td colspan="3">ডিমান্ড চার্জ ( ${laovalinputvalinputbd} কিলোওয়াট)</td>
          <td>${demangChageValueBd}</td>
        </tr>
        <tr>
          <td colspan="3">ভ্যাট (৫%)</td>
          <td>${vatbd}</td>
        </tr>
        <tr>
          <td colspan="3">সর্বমোট</td>
          <td>${totalbd}</td>
        </tr>
        <tr>
          <td>কথায়</td>
          <td colspan="3">${word}</td>
        </tr>
    </table>`;
  let div_button = `<div class="btn_section">
                  <button  class="btn ref" onClick="reload()">পুনরায় হিসাব করুন</button>    
                  <input type="button" class="btn prints" value="বিল প্রিন্ট করুন" onclick="printDiv()">  
                </div>`;
  document.getElementById("output").innerHTML = bill + div_button;
}
//for pirnting onClick="window.location.reload()">
function reload() {
  location.reload();
}
function printDiv() {
  var divContents = document.getElementById("output").innerHTML;
  var divContents2 = document.getElementById("time").innerHTML;

  console.log(divContents);
  let printWindow = window.open("", "", "height=1000,width=1200");
  console.log(printWindow);
  printWindow.document.open();
  printWindow.document.write(`<html>
<head>
    <title>Bill</title>
    <style>
    body {
    font-size: 10px;
    }
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;

}

table,
th,
td {
    border: 1px solid #333;
    font-size: 20px;
}

td {
    text-align: center;
    font-size: 20px;
}

#output {
    padding: 20px;
    width: 100%;
}

td:last-child {
    text-align: right;
    padding-right: 20px;
}

.total {
    font-weight: bold;
    text-decoration-line: underline;
    text-decoration-style: double;
    padding: 10px 0;
}
td.word {
    text-align: left;
    padding-left: 10px;
    text-decoration: underline;
    font-weight: bold;
}
    .btn_section{
        display: none;
    }
    #time{
    text-align: center;
    font-size: 40px;
    position: absolute;
    bottom: 0;
    }
    </style>
</head>
<body">
    ${divContents}
    ${divContents2}
</body>
</html>`);
  printWindow.document.close();
  printWindow.print();
}
