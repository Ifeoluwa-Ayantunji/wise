const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});

// Fire base config
  const firebaseConfig = {
    apiKey: "AIzaSyA3bvI01e5XtUDF_-oPW-EPUl0M42kUjuI",
    authDomain: "wisemonk-67a93.firebaseapp.com",
    projectId: "wisemonk-67a93",
    storageBucket: "wisemonk-67a93.appspot.com",
    messagingSenderId: "1079565482098",
    appId: "1:1079565482098:web:6fd4df25827027e2d6eaeb"
  };

 
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signupButton = document.getElementById("signup")

signupButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signup click");

    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .createUserWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
    })
    .catch((error) => {
    
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
    });
});


//Signin Function
let signInButton = document.getElementById("signin")

signInButton.addEventListener("click",(e) =>{
    e.preventDefault();
    console.log("signin click");
    
    var email = document.getElementById("inputEmail");
    var Password = document.getElementById("inputPassword");

    auth 
    .signInWithEmailAndPassword(email.value,Password.value)
    .then((userCredential) => {
        location.reload();
        // Signed in
        var user = userCredential.user;
        console.log("user,user.mail");
        window.location = "home.html";
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("error code",errorCode);
        console.log("error message",errorMessage);
    });
});
//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user){
    if (user) {
        var email = user.email;
        var users = document.getElementById("user");
        users.appendChild(text);
        console.log(users);
    }
    else {

    }
});
