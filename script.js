let fullname;

document.getElementById("mySend").addEventListener ('click', function() {
    fullname = document.getElementById("myName").value;
    console.log(fullname);
})

let email;

document.getElementById("mySend").addEventListener ('click', function() {
    email = document.getElementById("myEmail").value;
    console.log(email);
})

let message;

document.getElementById("mySend").addEventListener ('click', function() {
    message = document.getElementById("myMessage").value;
    console.log(message);
})

