function submitForm() {
  var firstName = document.getElementById("fnId");
  var lastName = document.getElementById("lnId");
  var email = document.getElementById("eId");
  var mobileNumber = document.getElementById("mnId");
  var gmail = document.getElementById("gId");
  var sbmit = document.getElementById("submitId");
  var reset = document.getElementById("resetId");
  console.log(firstName.value);
  console.log(lastName.value);
  console.log(email.value);
  console.log(mobileNumber.value);
  console.log(gmail.value);
  console.log(sbmit.value);
  console.log(reset.value);

  noodles("http://127.0.0.1:5500/hello.js", eggs);
}


function noodles(theUrl, callback) {
  
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  };
  
  xmlHttp.open("POST", theUrl, true);
  xmlHttp.send(null);
}

function eggs(response) {
  console.log(response);
}
