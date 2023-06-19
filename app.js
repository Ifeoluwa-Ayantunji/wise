
  // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA3bvI01e5XtUDF_-oPW-EPUl0M42kUjuI",
    authDomain: "wisemonk-67a93.firebaseapp.com",
    projectId: "wisemonk-67a93",
    storageBucket: "wisemonk-67a93.appspot.com",
    messagingSenderId: "1079565482098",
    appId: "1:1079565482098:web:6fd4df25827027e2d6eaeb"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


  const auth = firebase.auth();

//   signup function /

let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) => {
    // prevent form subbmision  behaivor 
    e.preventDefault();
    console.log("clicked");

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        window.location = "index.html";
        alert("user signup successfully")

        // signin 

        var user = userCredential.user;
        console.log("user,user.email");

    })
            
    .catch((error) =>{
        var errorCode = error.code
        var errorMessage = error.message
        console.log("error code", errorCode)
        console.log("error message", errorMessage)
        alert(errorMessage)
    })
});

// signin function  


let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
    // prevent form subbmision  behaivor 
    e.preventDefault();
    console.log("siclicked");

    var email = document.getElementById("inputEmail")
    var password = document.getElementById("inputPassword")

    auth

    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) =>{
        var user = userCredential.user;
        console.log("user,user.email");
        window.location = "home.html"
    })
    .catch((error) => { 
        var errorCode = error.code
        var errorMessage = error.message

        alert(errorMessage);
    });
});
