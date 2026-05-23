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
  let two = 7.2;
  let twobd = two.toLocaleString("bn-BD");
  let second = consumption - first;
  let secondUp = 125;
  let secondUpbd = secondUp.toLocaleString("bn-BD");
  let secondupval = 125 * two;
  let secondupvalbd = secondupval.toLocaleString("bn-BD");
  let secondval = (consumption - 75) * two;
  let secondbd = second.toLocaleString("bn-BD");
  let secondvalbd = secondval.toLocaleString("bn-BD");
  let three = 7.59;
  let threebd = three.toLocaleString("bn-BD");
  let third = consumption - 200;
  let thirdbd = third.toLocaleString("bn-BD");
  let thirdval = (consumption - 200) * three;
  let thirdvalbd = thirdval.toLocaleString("bn-BD");
  let thirddUp = 100;
  let thirddUpbd = thirddUp.toLocaleString("bn-BD");
  let thirdupval = 100 * three;
  let thirdupvalbd = thirdupval.toLocaleString("bn-BD");
  let four = 8.02;
  let fourbd = four.toLocaleString("bn-BD");
  let fourth = consumption - 300;
  let fourthbd = fourth.toLocaleString("bn-BD");
  let fourthval = (consumption - 300) * four;
  let fourthvalbd = fourthval.toLocaleString("bn-BD");
  let fourthUp = 100;
  let fourthUpbd = fourthUp.toLocaleString("bn-BD");
  let fourupval = 100 * four;
  let fourthupvalbd = fourupval.toLocaleString("bn-BD");
  let five = 12.76;
  let fivebd = five.toLocaleString("bn-BD");
  let fifth = consumption - 400;
  let fifthbd = fifth.toLocaleString("bn-BD");
  let fifthval = (consumption - 400) * five;
  let fifthvalbd = fifthval.toLocaleString("bn-BD");
  let fifthUp = 100;
  let fifthUpbd = fifthUp.toLocaleString("bn-BD");
  let fifththupval = 100 * five;
  let fifthupvalbd = fifththupval.toLocaleString("bn-BD");
  let six = 14.61;
  let sixbd = six.toLocaleString("bn-BD");
  let sixth = consumption - 600;
  let sixthbd = sixth.toLocaleString("bn-BD");
  let sixthval = (consumption - 600) * six;
  let sixthvalbd = sixthval.toLocaleString("bn-BD");
  let demandChargecount = load * loadCharge;
  let demandChargecountbd = demandChargecount.toLocaleString("bn-BD");
  let empty = 0;
  let emptybd = empty.toLocaleString("bn-BD");
  let x = 5;
  let y= -6;
  console.log("x");
  z = x*y;
  console.log(z);
  zpos = Math.max(0, z);
  console.log(zpos);
 
  if (consumption <= 50) {
    // life line charge
    lfc = consumption * lf;
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      consumptionbd +
      "</td><td>" +
      ifcbd +
      " টাকা  </td></tr><tr><td colspan=" +
      "3" +
      ">মোট </td><td>" +
      subtotalbd +
      " টাকা </td>";
  } else if (consumption >= 50 && consumption <= 75) {
    // 1st step charge
    lfc = consumption * one;
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      consumptionbd +
      "</td><td>" +
      ifcbd +
      "</td></tr>  </tr><tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      " </td>";
  } else if (consumption >= 76 && consumption <= 200) {
    // 2nd step charge
    lfc = (consumption - 75) * two + 75 * one;
    console.log(second);
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      firstbd +
      "</td><td>" +
      firstvalbd +
      "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" +
      twobd +
      "</td><td>" +
      secondbd +
      "</td><td>" +
      secondvalbd +
      "</td></tr><tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      "  </td>";
  } else if (consumption >= 201 && consumption <= 300) {
    // 3nd step charge
    lfc = (consumption - 200) * three + (200 - 75) * two + 75 * one;
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      firstbd +
      "</td><td>" +
      firstvalbd +
      "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" +
      twobd +
      "</td><td>" +
      secondUpbd +
      "</td><td>" +
      secondupvalbd +
      "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" +
      threebd +
      "</td><td>" +
      thirdbd +
      "</td><td>" +
      thirdvalbd +
      "</td></tr><tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      "  </td>";
  } else if (consumption >= 301 && consumption <= 400) {
    // 4th step charge
    lfc =
      (consumption - 300) * four +
      (300 - 200) * three +
      (200 - 75) * two +
      75 * one;
    console.log(second);
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "   </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      firstbd +
      "</td><td>" +
      firstvalbd +
      "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" +
      twobd +
      "</td><td>" +
      secondUpbd +
      "</td><td>" +
      secondupvalbd +
      "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" +
      threebd +
      "</td><td>" +
      thirddUpbd +
      "</td><td>" +
      thirdupvalbd +
      "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" +
      fourbd +
      "</td><td>" +
      fourthUpbd +
      "</td><td>" +
      fourthupvalbd +
      "</td></tr><tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      "  </td>";
  } else if (consumption >= 401 && consumption <= 600) {
    // 5th step charge
    lfc =
      (consumption - 400) * five +
      (400 - 300) * four +
      (300 - 200) * three +
      (200 - 75) * two +
      75 * one;
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      firstbd +
      "</td><td>" +
      firstvalbd +
      "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" +
      twobd +
      "</td><td>" +
      secondUpbd +
      "</td><td>" +
      secondupvalbd +
      "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" +
      threebd +
      "</td><td>" +
      thirddUpbd +
      "</td><td>" +
      thirdupvalbd +
      "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" +
      fourbd +
      "</td><td>" +
      fourthUpbd +
      "</td><td>" +
      fourthupvalbd +
      "</td></tr><tr><td>পঞ্চম ধাপ <br/> (৪০১ থেকে ৬০০) </td><td>" +
      fivebd +
      "</td><td>" +
      fifthbd +
      "</td><td>" +
      fifthvalbd +
      "</td></tr><tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      "  </td>";
  } else if (consumption >= 601) {
    // 6th step charge
    lfc =
      (consumption - 600) * six +
      (600 - 400) * five +
      (400 - 300) * four +
      (300 - 200) * three +
      (200 - 75) * two +
      75 * one;
    ifcbd = lfc.toLocaleString("bn-BD");
    subtotal = lfc;
    subtotalfix = subtotal.toFixed(0);
    subtotalbd = subtotalfix.getDigitBanglaFromEnglish();
    table_2 =
      "<tr><td>লাইফ লাইন <br>(০ থেকে ৫০)</td><td>" +
      lfbd +
      "</td><td>" +
      emptybd +
      "</td><td>" +
      emptybd +
      "  </td> <tr><td>ধাপ ১ <br/>(৫১ থেকে ৭৫)</td><td>" +
      onebd +
      "</td><td>" +
      firstbd +
      "</td><td>" +
      firstvalbd +
      "</td></tr>  </tr>  <tr><td>দ্বিতীয় ধাপ <br/> (৭৬ থেকে ২০০)</td><td>" +
      twobd +
      "</td><td>" +
      secondUpbd +
      "</td><td>" +
      secondupvalbd +
      "</td></tr><tr><td>তৃতীয় ধাপ <br/>(২০১ থেকে ৩০০) </td><td>" +
      threebd +
      "</td><td>" +
      thirddUpbd +
      "</td><td>" +
      thirdupvalbd +
      "</td></tr><tr><td>চতুর্থ ধাপ <br/>(৩০১ থেকে ৪০০) </td><td>" +
      fourbd +
      "</td><td>" +
      fourthUpbd +
      "</td><td>" +
      fourthupvalbd +
      "</td></tr><tr><td>পঞ্চম ধাপ <br/> (৪০১ থেকে ৬০০) </td><td>" +
      fivebd +
      "</td><td>" +
      fifthUpbd +
      "</td><td>" +
      fifthupvalbd +
      "</td></tr><tr><td>ষষ্ট ধাপ <br/> (৬০১ এর  উপরে) </td><td>" +
      sixbd +
      "</td><td>" +
      sixthbd +
      "</td><td>" +
      sixthvalbd +
      "</td></tr> <tr><td colspan=" +
      "2" +
      ">মোট </td><td>" +
      consumptionbd +
      "</td><td>" +
      subtotalbd +
      "  </td>";
  }
  vat = (subtotal + demandChargecount) * 0.05;
  vatfix = vat.toFixed(0);
  vatbd = vatfix.getDigitBanglaFromEnglish();
  total = vat + vat + subtotal + demandChargecount;
  console.log(total);
  totalfix = total.toFixed(0);
  totalword = (numberToBanglaWords(totalfix));
  console.log(totalword);
  totalbd = totalfix.getDigitBanglaFromEnglish();
  table_1 =
    "<table><tr><th>ধাপ</th><th>মূল্যহার</th><th>ব্যবহৃত ইউনিট</th><th>এনাজি চার্জ</th></tr>";
  table_3 =
    "<tr><td colspan=" +
    "3" +
    ">ডিমান্ড চার্জ (" +
    loadbd +
    " কিলোওয়াট)</td><td>" +
    demandChargecountbd +
    " </td></tr><tr><td colspan=" + "3" +">ভ্যাট (৫%) </td><td>" +
    vatbd +
    "  </td> </tr><tr><td colspan=" +
    "3" +
    ">সর্বমোট </td><td class=" +
    "total" +
    ">" +
    totalbd +
    " </td></tr> <tr><td >কথায় </td><td class="+"word"+" colspan="+"3"+"> "+totalword+" </td></tr></table>";
  div_button = `<div class="btn_section">
       <button  class="btn ref" onClick="reload()">পুনরায় হিসাব করুন</button>    
       <input type="button" class="btn prints" value="বিল প্রিন্ট করুন" onclick="printDiv()">  
    </div>
    `;
  // console.log(z);"
  document.getElementById("output").innerHTML =
    table_1 + table_2 + table_3 + div_button;
   
   
   const teens = ['দশ', 'এগারো', 'বারো', 'তেরো', 'চৌদ্দ', 'পনেরো', 'ষোলো', 'সতেরো', 'আঠারো', 'ঊনিশ' ,'বিশ', ,'একত্রিশ','বত্রিশ','তেত্রিশ','চৌত্রিশ','পঁইত্রিশ','ছত্রিশ','সাঁইত্রিশ','আটত্রিশ','উনচল্লিশ','চল্লিশ','একচল্লিশ','বিয়াল্লিশ','তেতাল্লিশ','চুয়াল্লিশ','পঁইত্রিশ','ছিচল্লিশ','সাতচল্লিশ','আটচল্লিশ','উনপঞ্চাশ','পঞ্চাশ',  , ];

     const teens20 =[ 'বিশ','একুশ','বাইশ','তেইশ','চব্বিশ','পঁচিশ','ছাব্বিশ','সাতাশ','আটাশ','উনত্রিশ','ত্রিশ',];
    const teens30 = ['একত্রিশ','বত্রিশ','তেত্রিশ','চৌত্রিশ','পঁইত্রিশ','ছত্রিশ','সাঁইত্রিশ','আটত্রিশ','উনচল্লিশ','চল্লিশ']
    const teens40 = ['একচল্লিশ','বিয়াল্লিশ','তেতাল্লিশ','চুয়াল্লিশ','পঁইত্রিশ','ছিচল্লিশ','সাতচল্লিশ','আটচল্লিশ','উনপঞ্চাশ','পঞ্চাশ']
    const teens50 = ['একান্ন' , 'বায়ান্ন' , 'তিয়ান্ন' , 'চুয়ান্ন' , 'পঞ্চান্ন' , 'ছাপান্ন' , 'সাতান্ন' , 'আটান্ন' , 'উনষাট' , 'ষাট']
    const teens60 = [ 'একষাট' , 'বাষট্টি' , 'তেষট্টি' , 'চৌষট্টি' , 'পঁইষট্টি' , 'ছেষট্টি' , 'সাতষট্টি' , 'আটষট্টি' , 'উনসত্তর' , 'সত্তর']
    const teens70 = ['একাত্তর', 'বাহাত্তর', 'তিয়াত্তর', 'চুয়াত্তর', 'পঁইত্তর', 'ছিয়াত্তর', 'সাতাত্তর', 'আটাত্তর', 'উনআশি', 'আশি']
    const teens80 = ['একাশি', 'বিরাশি', 'তিরাশি', 'চুরাশি', 'পঁইরাশি', 'ছিয়াশি', 'সাতাশি', 'আটাশি', 'উননব্বই', 'নব্বই']
    const teens90 = ['একানব্বই', 'বিরানব্বই', 'তিরানব্বই', 'চুরানব্বই', 'পঁইরানব্বই', 'ছিয়ানব্বই', 'সাতানব্বই', 'আটানব্বই' ,'নিরানব্বই']
    
+(numberToBanglaWords(5580))`<br/>` +(numberToBanglaWords(87580))`<br/>` +(numberToBanglaWords(168237))`<br/>` +(numberToBanglaWords(5599520))`<br/>` +(numberToBanglaWords(30))
let texta = "";
// Prints numbers 0 to 4
for (let i = 21; i < 40; i++) {
  console.log(i);
  texta +=(numberToBanglaWords(i)) +" </br>";
}
const NEGATIVE = "ঋণাত্মক";
const DECIMAL = " দশমিক";
const HUNDRED = 100;
const THOUSAND = 1000;
const LAC = 100000;
const CORE = 10000000;
const BILLION = 1000000000;
const TRILLION = 1000000000000;
const QUADRILLION = 1000000000000000;
const MAX_SAFE_NUMBER = 9007199254740991;

// English To Bangla Number Map
const banglaNumberMap = {
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
  0: "০",
  ".": ".",
  "-": "-",
  "+": "+",
  _: "_",
  "/": "/",
};

// English To Bangla Days month Map
const banglaDateMap = {
  1: "১",
  2: "২",
  3: "৩",
  4: "৪",
  5: "৫",
  6: "৬",
  7: "৭",
  8: "৮",
  9: "৯",
  0: "০",
  "-": "-",
  _: "_",
  "/": "/",
  " ": " ",
  ":": ":",
  'january': "জানুয়ারি",
  'jan': "জানুয়ারি",
  'february': "ফেব্রুয়ারি",
  'feb': "ফেব্রুয়ারি",
  'march': "মার্চ",
  'mar': "মার্চ",
  'april': "এপ্রিল",
  'apr': "এপ্রিল",
  'may': "মে",
  'june': "জুন",
  'jun': "জুন",
  'july': "জুলাই",
  'jul': "জুলাই",
  'august': "আগস্ট",
  'aug': "আগস্ট",
  'september': "সেপ্টেম্বর",
  'sept': "সেপ্টেম্বর",
  'sep': "সেপ্টেম্বর",
  'october': "অক্টোবর",
  'oct': "অক্টোবর",
  'november': "নভেম্বর",
  'nove': "নভেম্বর",
  'nov': "নভেম্বর",
  'december': "ডিসেম্বর",
  'dec': "ডিসেম্বর",
  'saturday': "শনিবার",
  'sat': "শনি",
  'sunday': "রবিবার",
  'sun': "রবি",
  'monday': "সোমবার",
  'mon': "সোম",
  'tuesday': "মঙ্গলবার",
  'tues': "মঙ্গল",
  'wednesday': "বুধবার",
  'wed': "বুধ",
  'thursday': "বৃহস্পতিবার",
  'thu': "বৃহস্পতি",
  'thurs': "বৃহস্পতি",
  'friday': "শুক্রবার",
  "fri": "শুক্র",
  am: "am",
  pm: "pm",
};
function getBanglaMonthName(englishMonth) {
    const monthMap = {
        'january': 'জানুয়ারি',
        'february': 'ফেব্রুয়ারি',
        'march': 'মার্চ',
        'april': 'এপ্রিল',
        'may': 'মে',
        'june': 'জুন',
        'july': 'জুলাই',
        'august': 'আগস্ট',
        'september': 'সেপ্টেম্বর',
        'october': 'অক্টোবর',
        'november': 'নভেম্বর',
        'december': 'ডিসেম্বর',
        'sat': "শনি",
        
    };
    
    const key = englishMonth.toLowerCase();
    return monthMap[key] || 'অজানা মাস'; // Returns 'Unknown month' if not found
}

const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
console.log(monthName); // e.g., "May"
console.log(getBanglaMonthName("sat"));

const date = new Date();
const monthName = date.toLocaleString('default', { month: 'long' });
console.log(monthName); // e.g., "May"
console.log(getBanglaMonthName("sat"));
// const date = new Date();
const options = { 
  timeZone: 'Asia/Dhaka', 
  dateStyle: 'full', 
  timeStyle: 'medium' 
};

// English to Bangla Word Map
const banglaWordMap = {
  0: "শূন্য",
  1: "এক",
  2: "দুই",
  3: "তিন",
  4: "চার",
  5: "পাঁচ",
  6: "ছয়",
  7: "সাত",
  8: "আট",
  9: "নয়",
  10: "দশ",
  11: "এগারো",
  12: "বারো",
  13: "তেরো",
  14: "চৌদ্দ",
  15: "পনের",
  16: "ষোল",
  17: "সতের",
  18: "আঠার",
  19: "উনিশ",
  20: "বিশ",
  21: "একুশ",
  22: "বাইশ",
  23: "তেইশ",
  24: "চব্বিশ",
  25: "পঁচিশ",
  26: "ছাব্বিশ",
  27: "সাতাশ",
  28: "আটাশ",
  29: "ঊনত্রিশ",
  30: "ত্রিশ",
  31: "একত্রিশ",
  32: "বত্রিশ",
  33: "তেত্রিশ",
  34: "চৌত্রিশ",
  35: "পঁয়ত্রিশ",
  36: "ছত্রিশ",
  37: "সাঁইত্রিশ",
  38: "আটত্রিশ",
  39: "ঊনচল্লিশ",
  40: "চল্লিশ",
  41: "একচল্লিশ",
  42: "বিয়াল্লিশ",
  43: "তেতাল্লিশ",
  44: "চুয়াল্লিশ",
  45: "পঁয়তাল্লিশ",
  46: "ছিচল্লিশ",
  47: "সাতচল্লিশ",
  48: "আটচল্লিশ",
  49: "ঊনপঞ্চাশ",
  50: "পঞ্চাশ",
  51: "একান্ন",
  52: "বাহান্ন",
  53: "তেপ্পান্ন",
  54: "চুয়ান্ন",
  55: "পঞ্চান্ন",
  56: "ছাপ্পান্ন",
  57: "সাতান্ন",
  58: "আটান্ন",
  59: "ঊনষাট",
  60: "ষাট",
  61: "একষট্টি",
  62: "বাষট্টি",
  63: "তেষট্টি",
  64: "চৌষট্টি",
  65: "পঁয়ষট্টি",
  66: "ছেষট্টি",
  67: "সাতষট্টি",
  68: "আটষট্টি",
  69: "উনসত্তুর",
  70: "সত্তর",
  71: "একাত্তর",
  72: "বাহাত্তর",
  73: "তেহাত্তুর",
  74: "চুয়াত্তর",
  75: "পঁচাত্তর",
  76: "ছিয়াত্তর",
  77: "সাতাত্তর",
  78: "আটাত্তর",
  79: "ঊনআশি",
  80: "আশি",
  81: "একাশি",
  82: "বিরাশি",
  83: "তিরাশি",
  84: "চুরাশি",
  85: "পঁচাশি",
  86: "ছিয়াশি",
  87: "সাতাশি",
  88: "আটাশি",
  89: "উননব্বই",
  90: "নব্বই",
  91: "একানব্বই",
  92: "বিরানব্বই",
  93: "তিরানব্বই",
  94: "চুরানব্বই",
  95: "পঁচানব্বই",
  96: "ছিয়ানব্বই",
  97: "সাতানব্বই",
  98: "আটানব্বই",
  99: "নিরানব্বই",
  100: "শত",
  1000: "হাজার",
  100000: "লক্ষ",
  10000000: "কোটি",
  1000000000: "বিলিয়ন",
  1000000000000: "ট্রিলিয়ন",
  1000000000000000: "কোয়াড্রিলিয়ন",
};

// Utils Function
const isNumber = (str) => {
  // Remove leading and trailing whitespace
  let strTrim = str.toString().trim();
  // Check if the trimmed string is not empty and is a valid number
  return strTrim !== "" && !isNaN(strTrim);
};

// English to Bangla Word
function englishToBanglaWord(number) {
  let remainder,
    word,
    words = arguments[1];

  if (number === 0) {
    return !words ? banglaWordMap[0] : words.join(" ").replace(/,$/, "");
  }

  if (!words) {
    words = [];
  }

  if (number < 0) {
    words.push(NEGATIVE);
    number = Math.abs(number);
  }

  if (number < HUNDRED) {
    remainder = 0;
    word = banglaWordMap[number];
  } else if (number < THOUSAND) {
    remainder = number % HUNDRED;
    word = banglaWordMap[Math.floor(number / HUNDRED)] + banglaWordMap[HUNDRED];
  } else if (number < LAC) {
    remainder = number % THOUSAND;
    word =
      banglaWordMap[Math.floor(number / THOUSAND)] +
      " " +
      banglaWordMap[THOUSAND];
  } else if (number < CORE) {
    remainder = number % LAC;
    word = banglaWordMap[Math.floor(number / LAC)] + " " + banglaWordMap[LAC];
  } else if (number < BILLION) {
    remainder = number % CORE;
    word =
      englishToBanglaWord(Math.floor(number / CORE)) +
      " " +
      banglaWordMap[CORE];
  } else if (number < TRILLION) {
    remainder = number % BILLION;
    word =
      englishToBanglaWord(Math.floor(number / BILLION)) +
      " " +
      banglaWordMap[BILLION];
  } else if (number < QUADRILLION) {
    remainder = number % TRILLION;
    word =
      englishToBanglaWord(Math.floor(number / TRILLION)) +
      " " +
      banglaWordMap[TRILLION];
  } else if (number <= MAX_SAFE_NUMBER) {
    remainder = number % QUADRILLION;
    word =
      englishToBanglaWord(Math.floor(number / QUADRILLION)) +
      " " +
      banglaWordMap[QUADRILLION];
  }
  words.push(word);
  return englishToBanglaWord(remainder, words);
}

// English to Bangla Number
const englishToBanglaNumber = (number) => {
  {
    if (!isNumber(number)) return "Not a valid number";
    let toString = number.toString();
    let toBanglaNumber = "";
    for (let i = 0; i < toString.length; i++) {
      const element = toString[i];
      toBanglaNumber += banglaNumberMap[element];
    }
    return toBanglaNumber;
  }
};

const singleNumberToWord = (number) => {
  let result = "";
  for (const char of number) {
    result += `${banglaWordMap[char]} `;
  }
  return result;
};

// English Date Time  to Bangla Date Time

const englishToBanglaDate = (string) => {
  string.trim();
  const lowerString = string.toLowerCase() + " ";
  let result = "";
  var regExp = /[a-z]/;

  // Direct Match Check
  if (banglaDateMap[lowerString]) {
    return banglaDateMap[lowerString];
  }
  // If it contains words
  else if (regExp.test(lowerString)) {
    let charSet = "";

    for (i = 0; i < lowerString.length; i++) {
      const char = lowerString[i];
      // Regx isChar Check
      if (regExp.test(char)) {
        charSet += char;
      } else if (charSet) {
        if (!banglaDateMap[charSet]) {
          return "Invalid Date or Time";
        }
        result += banglaDateMap[charSet];
        result += banglaDateMap[char];
        charSet = "";
      } else if (banglaDateMap[char]) {
        result += banglaDateMap[char];
      } else {
        error.log("Invalid Date or Time");
        return "Invalid Date or Time";
      }
    }
    return result;
  }
  //Expected Regular Date Format
  else {
    for (const element of lowerString) {
      result += banglaDateMap[element];
    }
    return result;
  }
};

// Main Function Start
function toBangla() {
  return {
    //   English to bangla Number
    engToNumber: (number) => englishToBanglaNumber(number),
    //   English to bangla Word
    engToWord: (number, currency) => {
      if (!isNumber(number)) return "Not a valid number";
      const numberToString = number.toString();
      if (numberToString.includes(".")) {
        const apart = numberToString.trim().split(".");
        const firstPart = englishToBanglaWord(apart[0]);
        const lastPart = currency
          ? englishToBanglaWord(apart[1].slice(0, 2))
          : singleNumberToWord(apart[1]);
        return currency
          ? `${firstPart} টাকা এবং ${lastPart} পয়সা`
          : `${firstPart}${DECIMAL} ${lastPart}`;
      }
      return currency
        ? englishToBanglaWord(number) + " টাকা"
        : englishToBanglaWord(number);
    },
    engToDate: (string) => englishToBanglaDate(string),
  };
}

const bn = toBangla();
module.exports = bn;