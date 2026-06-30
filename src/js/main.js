var grids = document.getElementById("gridss");
var solor = document.getElementById("solar");
var both = document.getElementById("both");
var gridOutputHied = document.getElementById("output_grid");
var solorOutputHide = document.getElementById("output_solor")
var btnactivecor = document.getElementsByClassName("btn");
function gridout() {
  grids.style.display = "block";
  solor.style.display = "none";
  btnactivecor[0].classList.add("btn_activea");
  btnactivecor[1].classList.remove("btn_active");
  solorOutputHide.style.display = "none";
}
function solorOutput() {
  grids.style.display = "none";
  solor.style.display = "block";
  btnactivecor[0].classList.remove("btn_active");
  btnactivecor[1].classList.add("btn_active");
  gridOutputHied.style.display = "none";
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
  if (num < 100) return teentdss[num] + " টাকা মাত্র।";
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
const month = ["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"];

const d = new Date();
let name = month[d.getMonth()]; 
let info = `<table class="info">
  <tr>
    <td colspan="4"> গ্রহকের নাম: মোঃ আফছার আলী</td>
    <td> মাসের নাম </td>
  </tr>
  <tr>
    <td colspan="4"> গ্রহকের ঠিকানা: ২১, কাদিরগঞ্জ বোয়ালিয়া রাজশহী</td>
    <td>${name} </td>
  </tr>
</table>`
document.getElementById("time").innerHTML += `<h1>${banglaTime}</h1>`;
var lifeRate = 5.32;
var lifeRatebd = lifeRate.toLocaleString("bn-BD");
var firststRate = 6.18;
var firststRateBD = firststRate.toLocaleString("bn-BD");
var secondRate = 8.5;
var secondRateBD = secondRate.toLocaleString("bn-BD");
var thirdRate = 9.1;
var thirdRateBD = thirdRate.toLocaleString("bn-BD");
var fourthRate = 9.62;
var fourthRateBD = fourthRate.toLocaleString("bn-BD");
var fifthRate = 15.01;
var fifthRateBD = fifthRate.toLocaleString("bn-BD");
var sixthRate = 17.35;
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
                  <input type="button" class="btn prints" value="বিল প্রিন্ট করুন" onclick="printDiv_grid()">  
                </div>`;
  document.getElementById("output_grid").innerHTML = info+ bill + div_button;
}
// ?================== START ==================
function count_02() {
  function rate(rete, val) {
    return rete * val;
  }
  let output_grid_hidden = document.getElementById("output_grid");
  output_grid_hidden.style.display = "none";
  var consumptionsoursevalinput = document.getElementById(
    "consumption_solor_sourse",
  ).value;
  let consumptionsoursevalinputNum = Number(consumptionsoursevalinput);
  var consumptionsoursevalinputbd =
    consumptionsoursevalinputNum.toLocaleString("bn-BD");
  var consumptionsolorvalinput = document.getElementById(
    "consumption_solor_solor",
  ).value;
  let consumptionsolorvalinputNum = Number(consumptionsolorvalinput);
  var consumptionsolorvalinputbd =
    consumptionsolorvalinputNum.toLocaleString("bn-BD");
  var laovalinputsolorvalinput = document.getElementById("load_solor").value;
  let laovalinputvalsolorinputNum = Number(laovalinputsolorvalinput);
  var laovalinputvalsolorinputbd =
    laovalinputvalsolorinputNum.toLocaleString("bn-BD");
  // // // ! damang Chrag
  let demangChageRte = 42;
  let demangChageValue = demangChageRte * laovalinputsolorvalinput;
  let demangChageValueBd = demangChageValue.toLocaleString("bn-BD");
  let empyvalue = "0";
  let Hightvalue = "100";
  let totalused = consumptionsoursevalinputNum + consumptionsolorvalinputNum;
  let totalusedbd = totalused.toLocaleString("bn-BD");

  // ? ========== if grid section start =========
  if (consumptionsoursevalinput <= 50) {
    lifelinegrid = consumptionsoursevalinput;
  } else lifelinegrid = empyvalue;

  if (consumptionsoursevalinput < 51) {
    firstgridval = empyvalue;
  } else if (
    consumptionsoursevalinput >= 51 &&
    consumptionsoursevalinput <= 75
  ) {
    firstgridval = consumptionsoursevalinput;
  } else firstgridval = "75";
  // ! secound
  if (consumptionsoursevalinput <= 75) {
    secondgridval = 0;
  } else if (
    consumptionsoursevalinput >= 76 &&
    consumptionsoursevalinput < 200
  ) {
    secondgridval = consumptionsoursevalinput - 75;
  } else secondgridval = 125;
  if (consumptionsoursevalinput <= 200) {
    thirdgridval = 0;
  } else if (
    consumptionsoursevalinput >= 201 &&
    consumptionsoursevalinput < 300
  ) {
    thirdgridval = consumptionsoursevalinput - 200;
  } else thirdgridval = 100;
  if (consumptionsoursevalinput <= 300) {
    fourtgridval = 0;
  } else if (
    consumptionsoursevalinput >= 301 &&
    consumptionsoursevalinput < 400
  ) {
    fourtgridval = consumptionsoursevalinput - 300;
  } else fourtgridval = 100;
  if (consumptionsoursevalinput <= 400) {
    fifthgridval = 0;
  } else if (
    consumptionsoursevalinput >= 401 &&
    consumptionsoursevalinput < 600
  ) {
    fifthgridval = consumptionsoursevalinput - 400;
  } else fifthgridval = 200;
  if (consumptionsoursevalinput >= 601) {
    sixthgridval = consumptionsoursevalinput - 600;
  } else sixthgridval = 0;
  // ? ========== if grid section end =========

  let lifelinegridnumber = Number(lifelinegrid);
  let lifelinegridbd = lifelinegridnumber.toLocaleString("bn-Bd");
  let lifeLinegridval = rate(lifeRate, lifelinegrid);
  let lifeLinegridvalbd = lifeLinegridval.toLocaleString("bn-BD");
  let firstgridNum = Number(firstgridval);
  let firstgridBd = firstgridNum.toLocaleString("bn-BD");
  let firstgirdval = rate(firststRate, firstgridval);
  let firstgirdvalbd = firstgirdval.toLocaleString("bn-BD");
  let secondgridNum = Number(secondgridval);
  let secondgridBd = secondgridNum.toLocaleString("bn-BD");
  let secondgirdval = rate(secondRate, secondgridval);
  let secondgirdvalbd = secondgirdval.toLocaleString("bn-BD");
  let thirdgridNum = Number(thirdgridval);
  let thirdgridBd = thirdgridNum.toLocaleString("bn-BD");
  let thirdgirdval = rate(thirdRate, thirdgridval);
  let thirdgirdvalbd = thirdgirdval.toLocaleString("bn-BD");
  let fourtgridNum = Number(fourtgridval);
  let fourtgridBd = fourtgridNum.toLocaleString("bn-BD");
  let fourtgirdval = rate(fourthRate, fourtgridval);
  let fourtgirdvalbd = fourtgirdval.toLocaleString("bn-BD");
  let fifthgridNum = Number(fifthgridval);
  let fifthgridBd = fifthgridNum.toLocaleString("bn-BD");
  let fifthgirdval = rate(fifthRate, fifthgridval);
  let fifthgirdvalbd = fifthgirdval.toLocaleString("bn-BD");
  let sixthgridNum = Number(sixthgridval);
  let sixthgridBd = sixthgridNum.toLocaleString("bn-BD");
  let sixthgirdval = rate(sixthRate, sixthgridval);
  let sixthgirdvalbd = sixthgirdval.toLocaleString("bn-BD");
  // ? ========== if solor section start =========
  if (consumptionsolorvalinput <= 50) {
    lifelinesolor = consumptionsolorvalinput;
  } else lifelinesolor = empyvalue;

  if (consumptionsolorvalinput < 51) {
    firstsolorval = empyvalue;
  } else if (consumptionsolorvalinput >= 51 && consumptionsolorvalinput <= 75) {
    firstsolorval = consumptionsolorvalinput;
  } else firstsolorval = "75";
  if (consumptionsolorvalinput <= 75) {
    secondsolorval = 0;
  } else if (consumptionsolorvalinput >= 76 && consumptionsolorvalinput < 200) {
    secondsolorval = consumptionsolorvalinput - 75;
  } else secondsolorval = 125;
  if (consumptionsolorvalinput <= 200) {
    thirdsolorval = 0;
  } else if (
    consumptionsolorvalinput >= 201 &&
    consumptionsolorvalinput < 300
  ) {
    thirdsolorval = consumptionsolorvalinput - 200;
  } else thirdsolorval = 100;
  if (consumptionsolorvalinput <= 300) {
    fourtsolorval = 0;
  } else if (
    consumptionsolorvalinput >= 301 &&
    consumptionsolorvalinput < 400
  ) {
    fourtsolorval = consumptionsolorvalinput - 300;
  } else fourtsolorval = 100;
  if (consumptionsolorvalinput <= 400) {
    fifthsolorval = 0;
  } else if (
    consumptionsolorvalinput >= 401 && consumptionsolorvalinput < 600
  ) {
    fifthsolorval = consumptionsolorvalinput - 400;
  } else fifthsolorval = 200;
  if (consumptionsolorvalinput >= 601) {
    sixthsolorval = consumptionsolorvalinput - 600;
  } else sixthsolorval = 0;
  let lifelinesolorNum = Number(lifelinesolor);
  let lifenlnesolorbd = lifelinesolorNum.toLocaleString("bn-BD");
  let lifelinesolorval = rate(lifeRate, lifelinesolor);
  let lifelinesolorbd = lifelinesolorval.toLocaleString("bn-BD");
  let firstsolorNum = Number(firstsolorval);
  let firstsolorBd = firstsolorNum.toLocaleString("bn-BD");
  let firstsolorvals = rate(firststRate, firstsolorval);
  let firstsolorvalbd = firstsolorvals.toLocaleString("bn-BD");
  let secondsolorNum = Number(secondsolorval);
  let secondsolorBd = secondsolorNum.toLocaleString("bn-BD");
  let secondsolorvals = rate(secondRate, secondsolorval);
  let secondsolorvalbd = secondsolorvals.toLocaleString("bn-BD");
  let thirdsolorNum = Number(thirdsolorval);
  let thirdsolorBd = thirdsolorNum.toLocaleString("bn-BD");
  let thirdsolorvals = rate(thirdRate, thirdsolorval);
  let thirdsolorvalbd = thirdsolorvals.toLocaleString("bn-BD");
  let fourtsolorNum = Number(fourtsolorval);
  let fourtsolorBd = fourtsolorNum.toLocaleString("bn-BD");
  let fourtsolorvals = rate(fourthRate, fourtsolorval);
  let fourtsolorvalbd = fourtsolorvals.toLocaleString("bn-BD");
  let fifthsolorNum = Number(fifthsolorval);
  let fifthsolorBd = fifthsolorNum.toLocaleString("bn-BD");
  let fifthsolorvals = rate(fifthRate, fifthsolorval);
  let fifthsolorvalbd = fifthsolorvals.toLocaleString("bn-BD");
  let sixthsolorNum = Number(sixthsolorval);
  let sixthsolorBd = sixthsolorNum.toLocaleString("bn-BD");
  let sixthsolorvals = rate(sixthRate, sixthsolorval);
  let sixthsolorvalbd = sixthsolorvals.toLocaleString("bn-BD");
  // ? ========== if solor section end =========
  // ? ========== if subtotal , vat, total word  section start =========
  let subtotalgrid = (lifeLinegridval + firstsolorvals + secondgirdval+ thirdgirdval+fourtgirdval+fifthgirdval+sixthgirdval);
  let subtotalgridfix = subtotalgrid.toFixed(0);
  let subtotalgridnum = Number(subtotalgridfix);
  let subtotalgridbd = subtotalgridnum.toLocaleString("bn-BD");
  let gridvat = subtotalgrid * 0.05;
  let gridvatfix = gridvat.toFixed(0);
  let gridvatfixNum = Number(gridvatfix);
  let gridvatBd = gridvatfixNum.toLocaleString("bn-BD");
  let gridtotal = subtotalgrid + gridvat;
  let gridfix = gridtotal.toFixed(0);
  let gridfixNum = Number(gridfix);
  let gridBd = gridfixNum.toLocaleString("bn-BD");
  let gridWord = numberToBanglaWords(gridfixNum);

  // ! Solor
  let subtotalsolor =
    (lifelinesolorval + firstsolorvals + secondsolorvals + thirdsolorvals+fourtsolorvals+fifthsolorvals+sixthsolorvals);
  let subtotalsolorfix = subtotalsolor.toFixed(0);
  let subtotalsolornum = Number(subtotalsolorfix);
  let subtotalsolorbd = subtotalsolornum.toLocaleString("bn-BD");
  let solorvat = subtotalsolor * 0.05;
  let solorvatfix = solorvat.toFixed(0);
  let solorvatfixNum = Number(solorvatfix);
  let solorvatBd = solorvatfixNum.toLocaleString("bn-BD");
  let solortotal = subtotalsolor + solorvat;
  let solortotalFix = solortotal.toFixed(0);
  let solortotalFixNum = Number(solortotalFix);
  let solortotalBd = solortotalFixNum.toLocaleString("bn-BD");
  let solorWord = numberToBanglaWords(solortotalFixNum);

  // Solor & grid
  let subtotalgridAndSolor = subtotalsolornum + subtotalgridnum;
  let subtotalgridAndSolorbn = subtotalgridAndSolor.toLocaleString("bn-BD");
  let totalvat = gridvat + solorvat + demangChageValue * 0.05;
  let totalvatfix = totalvat.toFixed(0);
  let totalvatfixNum = Number(totalvatfix);
  let totalvatBd = totalvatfixNum.toLocaleString("bn-BD");
  let totalsolorAngrid = solortotal + gridtotal;
  let totalsolorAngridfix = totalsolorAngrid.toFixed(0);
  let totalsolorAngridfixNum = Number(totalsolorAngridfix);
  let totalsolorAngridbd = totalsolorAngridfixNum.toLocaleString("bn-BD");
  let totalsolorAngridWord = numberToBanglaWords(totalsolorAngridfixNum);

  // ? ========== if subtotal , vat, total word  section end =========

  solorOutputs = `<table style="margin: 10px; width: 98%">
        <tr>
          <th>ধাপ</th>
          <th>মূল্যহার</th>
          <th>সোবার মাধ্যম</th>
          <th>ব্যবহৃত ইউনিট</th>
          <th>এনাজি চার্জ</th>
        </tr>
        <tr>
          <td rowspan="2">লাইফ লাইন</td>
          <td rowspan="2">${lifeRatebd}</td>
          <td>বিদ্যুৎ</td>
          <td>${lifelinegridbd}</td>
          <td>${lifeLinegridvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${lifenlnesolorbd}</td>
          <td>${lifelinesolorbd}</td>
        </tr>
        <tr>
          <td rowspan="2">ধাপ ১ <br />(৫১ থেকে ৭৫)</td>
          <td rowspan="2">${firststRateBD}</td>
          <td>বিদ্যুৎ</td>
          <td>${firstgridBd}</td>
          <td>${firstgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${firstsolorBd}</td>
          <td>${firstsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="2">দ্বিতীয় ধাপ <br />(৭৬ থেকে ২০০)</td>
          <td rowspan="2">${secondRateBD}</td>
          <td>বিদ্যুৎ</td>
          <td>${secondgridBd}</td>
          <td>${secondgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${secondsolorBd}</td>
          <td>${secondsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="2">তৃতীয় ধাপ <br />(২০১ থেকে ৩০০)</td>
          <td rowspan="2">${thirdRateBD}</td>
          <td>বিদ্যুৎ</td>
          <td>${thirdgridBd}</td>
          <td>${thirdgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${thirdsolorBd}</td>
          <td>${thirdsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="2">চতুর্থ ধাপ <br />(৩০১ থেকে ৪০০)</td>
          <td rowspan="2">${fourthRateBD}</td>

          <td>বিদ্যুৎ</td>
          <td>${fourtgridBd}</td>
          <td>${fourtgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${fourtsolorBd}</td>
          <td>${fourtsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="2">পঞ্চম ধাপ <br />(৪০১ থেকে ৬০০)</td>
          <td rowspan="2">${fifthRateBD}</td>
          <td>বিদ্যুৎ</td>
          <td>${fifthgridBd}</td>
          <td>${fifthgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${fifthsolorBd}</td>
          <td>${fifthsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="2">ষষ্ট ধাপ <br />(৬০১ এর উপরে )</td>
          <td rowspan="2">${sixthRateBD}</td>
          <td>বিদ্যুৎ</td>
          <td>${sixthgridBd}</td>
          <td>${sixthgirdvalbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${sixthsolorBd}</td>
          <td>${sixthsolorvalbd}</td>
        </tr>
        <tr>
          <td rowspan="3" colspan="2">মোট</td>
          <td>বিদ্যুৎ</td>
          <td>${consumptionsoursevalinputbd} ইউনিট</td>
          <td>${subtotalgridbd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td>${consumptionsolorvalinputbd} ইউনিট</td>
          <td>${subtotalsolorbd}</td>
        </tr>
        <tr>
          <td>মোট</td>
          <td>${totalusedbd} ইউনিট</td>
          <td style="text-decoration:underline;font-weight: bold;">${subtotalgridAndSolorbn}</td>
        </tr>
        <tr>
          <td rowspan="2" colspan="2">ডিমান্ড চার্জ (${laovalinputvalsolorinputbd} কিলোওয়াট)</td>
        
          <td colspan="3" rowspan="2">${demangChageValueBd}</td>
        </tr>
        <tr>
          
        </tr>
        <tr>
          <td rowspan="3" colspan="2">ভ্যাট (৫%)</td>
          <td>বিদ্যুৎ</td>
          <td colspan="2">${gridvatBd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td colspan="2">${solorvatBd}</td>
        </tr>
        <tr>
          <td>মোট ভ্যাট</td>
          <td colspan="2">${totalvatBd}</td>
        </tr>
       
        <tr>
          <td rowspan="3" colspan="2">সর্বমোট</td>
          <td>বিদ্যুৎ</td>
          <td colspan="2">${gridBd}</td>
        </tr>
        <tr>
          <td>সোলার</td>
          <td colspan="2">${solortotalBd}</td>
        </tr>
        <tr>
          <td>মোট</td>
          <td colspan="2">${totalsolorAngridbd}</td>
        </tr>
         <tr>
          <td rowspan="3" colspan="1">কথায়</td>
          <td colspan="4">${gridWord}</td>
        </tr>
        <tr>
          <td colspan="4">${solorWord}</td>
        </tr>
        <tr>
          <td colspan="4">${totalsolorAngridWord}</td>
        </tr>
      </table>`;
  let div_button = `<div class="btn_section">
                  <button  class="btn ref" onClick="reload()">পুনরায় হিসাব করুন</button>    
                  <input type="button" class="btn prints" value="বিল প্রিন্ট করুন" onclick="printDivSolor()">  
                </div>`;
  document.getElementById("output_solor").innerHTML = info+ solorOutputs + div_button;
}
// ?================== END ==================
function reload() {
  location.reload();
}
function printDivSolor() {
  var divContentss = document.getElementById("output_solor").innerHTML;
  var divContents2 = document.getElementById("time").innerHTML;


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
    ${divContentss}
    ${divContents2}
</body>
</html>`);
  printWindow.document.close();
  printWindow.print();
}
function printDiv_grid() {
  var divContents = document.getElementById("output_grid").innerHTML;
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
