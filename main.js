 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyC67oazIQRBRyAQZYIoAqesgFKtn-XTDnY",
    authDomain: "contact-form-30b86.firebaseapp.com",
    databaseURL: "https://contact-form-30b86.firebaseio.com",
    projectId: "contact-form-30b86",
    storageBucket: "contact-form-30b86.appspot.com",
    messagingSenderId: "231005799491"
  };
  firebase.initializeApp(config);

  // reference messages collections
  var messagesRef = firebase.database().ref("messages")

document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    // get values
    var name = getInputVal("name");
    var email = getInputVal("email")
    var company = getInputVal("company")
    var phone = getInputVal("phone")
    var message = getInputVal("message")

    saveMessage(name, company, email, phone, message);

    // show alert
    document.querySelector(".alert").style.display = "block";
    
    // hide alert after 3 sec
    setTimeout(function(){
        document.querySelector(".alert").style.display = "none";
    }, 3000)

    document.getElementById("contact-form").reset();
}

// function to get form values
function getInputVal(id){
return document.getElementById(id).value;
}

// save messages to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    })
}