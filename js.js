/*
function toggleContent() {
  // Get the DOM reference
  var contentId = document.getElementById("content");
  // Toggle
  contentId.style.display == "block" ? contentId.style.display = "none" :
contentId.style.display = "block";
}
*/
var tutor_div = [
  '<div class="card mt-3"><div class="card-header">English Second Language</div><div class="card-body"><h5 class="card-title">Arum, Elodea</h5><p class="card-text">UTC+1 | 17:00 - 19:00 | Tuesday - Friday</p><a href="#" class="btn btn-primary" onclick="tutor_1()">Select as Tutor</a></div></div>',
  '<div class="card mt-3"><div class="card-header">Algebra</div><div class="card-body"><h5 class="card-title">Athabasca, Hickory</h5><p class="card-text">UTC | 17:30 - 20:30 | Thursday & Saturday - Sunday</p><a href="#" class="btn btn-primary" onclick="tutor_2()">Select as Tutor</a></div></div>',
  '<div class="card mt-3"><div class="card-header">Biology</div><div class="card-body"><h5 class="card-title">Burr, Rhubarb</h5><p class="card-text">UTC-7 | 16:00 - 18:00 | Saturday - Monday</p><a href="#" class="btn btn-primary" onclick="tutor_3()">Select as Tutor</a></div></div>',
  '<div class="card mt-3"><div class="card-header">Biology</div><div class="card-body"><h5 class="card-title">Burr, Rhubarb</h5><p class="card-text">UTC-7 | 16:00 - 18:00 | Saturday - Monday</p><a href="#" class="btn btn-primary" onclick="tutor_4()">Select as Tutor</a></div></div>',
  '<div class="card mt-3"><div class="card-header">Biology</div><div class="card-body"><h5 class="card-title">Chinquepin, Anise</h5><p class="card-text">UTC+9 | 7:30 - 10:00 | Thursday - Friday & Sunday</p><a href="#" class="btn btn-primary" onclick="tutor_5()">Select as Tutor</a></div></div>',
  '<div class="card mt-3"><div class="card-header">History</div><div class="card-body"><h5 class="card-title">Phlox, Alder</h5><p class="card-text">UTC-5 | 6:30 - 9:00 | Friday - Sunday</p><a href="#" class="btn btn-primary" onclick="tutor_6()">Select as Tutor</a></div></div>'
]

var tutor_subject = [
  "English Foreign Language",
  "Algebra",
  "Biology",
  "Psychology",
  "Biology",
  "History",
]

var tutor_timezone = [
  1,
  0,
  -7,
  -4,
  9,
  -5
]

var tutor_avail = [
  [17, 19],
  [17.5, 20.5],
  [16, 18],
  [18, 22],
  [7.5, 10],
  [6.5, 9]
]

var tutor_times = [
  [tutor_avail[0][0] - tutor_timezone[0], tutor_avail[0][1] - tutor_timezone[0]],
  [tutor_avail[1][0] - tutor_timezone[1], tutor_avail[1][1] - tutor_timezone[1]],
  [tutor_avail[2][0] - tutor_timezone[2], tutor_avail[2][1] - tutor_timezone[2]],
  [tutor_avail[3][0] - tutor_timezone[3], tutor_avail[3][1] - tutor_timezone[3]],
  [tutor_avail[4][0] - tutor_timezone[4], tutor_avail[4][1] - tutor_timezone[4]],
  [tutor_avail[5][0] - tutor_timezone[5], tutor_avail[5][1] - tutor_timezone[5]]
]

var tutor_id = [
  0,
  1,
  2,
  3,
  4,
  5
]

const toggleDisplay = mainContentToggle => mainContentToggle.style.display =
  (mainContentToggle.style.display == 'none') ?
  'block' :
  'none'

const toggleDisplayOffSus = contentToggle => contentToggle.style.display =
  (contentToggle.style.display == 'contents') ?
  'none' :
  'contents'



var confirmUserInfo = function() {
  var addFirstname = document.getElementById("firstName").value
  var addSurname = document.getElementById("lastName").value
  var addSubject = document.getElementById("subject").value
  var addTimezone = document.getElementById("timezone").value
  var addAvailEH = document.getElementById("availEH").value
  var addAvailEM = document.getElementById("availEM").value
  var addAvailLH = document.getElementById("availLH").value
  var addAvailLM = document.getElementById("availLM").value
  console.log(addFirstname)
  console.log(addSurname)
  console.log(addSubject)
  console.log(addTimezone)
  console.log(addAvailEH)
  console.log(addAvailEM)
  console.log(addAvailLH)
  console.log(addAvailLM)
  document.getElementById("my_firstName").placeholder = addFirstname
  document.getElementById("my_lastName").placeholder = addSurname
  document.getElementById("my_subject").value = addSubject
  document.getElementById("my_timezone").value = "UTC" + addTimezone
  document.getElementById("my_availE").placeholder = addAvailEH + ":" + addAvailEM
  document.getElementById("my_availL").placeholder = addAvailLH + ":" + addAvailLM
}

var filterUsers = function() {
  confirmUserInfo();
  var addAvailEH = document.getElementById("availEH").value * 1
  var addAvailEM = (document.getElementById("availEM").value) / 60
  var addAvailLH = document.getElementById("availLH").value * 1
  var addAvailLM = (document.getElementById("availLM").value) / 60
  var addTimezone = document.getElementById("timezone").value * 1
  var addSubject = document.getElementById("subject").value
  console.log(addAvailEM + addAvailEH - addTimezone)
  console.log(addAvailLM + addAvailLH - addTimezone)
  var userTimesE = addAvailEM + addAvailEH - addTimezone
  if (userTimesE >= 24) {
    userTimesE = userTimesE - 24
  } else if (userTimesE < 0) {
    userTimesE = 24 + userTimesE
  }
  var userTimesL = addAvailLM + addAvailLH - addTimezone
  if (userTimesL >= 24) {
    userTimesL = userTimesL - 24
  } else if (userTimesL < 0) {
    userTimesL = 24 + userTimesL
  }

  var filterIDtutor1 = 0
  var filterIDtutor2 = 0
  var filterIDtutor3 = 0
  var filterIDtutor4 = 0
  var filterIDtutor5 = 0
  var filterIDtutor6 = 0

  {
    if (addSubject == tutor_subject[0]) {
      filterIDtutor1 += 5
    }
  }

  {
    if (addSubject == tutor_subject[1]) {
      filterIDtutor2 += 5
    }
  }

  {
    if (addSubject == tutor_subject[2]) {
      filterIDtutor3 += 5
    }
  }

{
  if (addSubject == tutor_subject[3]) {
    filterIDtutor4 += 5
  }
}

{
  if (addSubject == tutor_subject[4]) {
    filterIDtutor5 += 5
  }
}

{
  if (addSubject == tutor_subject[5]) {
    filterIDtutor6 += 5
  }
}


var tutorTimes = [
  filterIDtutor1,
  filterIDtutor2,
  filterIDtutor3,
  filterIDtutor4,
  filterIDtutor5,
  filterIDtutor6
]

var largest = tutorTimes[0];

for (var i = 0; i < tutorTimes.length; i++) {
  if (largest < tutorTimes[i]) {
    largest = tutorTimes[i];
  }
}
console.log(largest);

if (tutorTimes.indexOf(largest) !== -1 && largest >= 5) {
  var recT = tutorTimes.indexOf(largest)
  console.log(recT)
  document.getElementById("recommended").innerHTML = tutor_div[recT]
}




//console.log(tutor_times[0])
}





var btn = document.getElementById("submitForm");
btn.addEventListener("click", confirmUserInfo);
btn.addEventListener("click", filterUsers);
//  btn.addEventListener("click", toggleDisplayOffSus(document.querySelector('#contentToggle')));



var btn2 = document.getElementById("submitForm2");
//btn.addEventListener("click", toggleDisplayOffSus(document.querySelector('#contentToggle')));


var cancel = function() {
  document.getElementById("my_tutors").innerHTML = "None yet..."
}

var tutor_1 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">English Second Language</div><div class="card-body"><h5 class="card-title">Arum, Elodea</h5><p class="card-text">UTC+1 | 17:00 - 19:00 | Tuesday - Friday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

var tutor_2 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">Algebra</div><div class="card-body"><h5 class="card-title">Athabasca, Hickory</h5><p class="card-text">UTC | 17:30 - 20:30 | Thursday & Saturday - Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

var tutor_3 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">Biology</div><div class="card-body"><h5 class="card-title">Burr, Rhubarb</h5><p class="card-text">UTC-7 | 16:00 - 18:00 | Saturday - Monday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

var tutor_4 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">Psychology</div><div class="card-body"><h5 class="card-title">Castellija, Clove</h5><p class="card-text">UTC-4 | 18:00 - 22:00 | Wednesday - Friday & Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

var tutor_5 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">Biology</div><div class="card-body"><h5 class="card-title">Chinquepin, Anise</h5><p class="card-text">UTC+9 | 7:30 - 10:00 | Thursday - Friday & Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

var tutor_6 = function() {
  document.getElementById("my_tutors").innerHTML = '<div class="card mt-3"><div class="card-header">History</div><div class="card-body"><h5 class="card-title">Phlox, Alder</h5><p class="card-text">UTC-5 | 6:30 - 9:00 | Friday - Sunday</p><a href="#" class="btn btn-primary" onclick="cancel()">Cancel</a></div></div>'
}

