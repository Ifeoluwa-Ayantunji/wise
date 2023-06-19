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
auth.onAuthStateChanged(function (user){
    if (user){
    var email = user.email;
    var user = document.getElementById("user");
    var text = document.createTextNode(email);
    user.appendChild(text);
    console.log(user);
    }

    else{
         alert("user not found kindly sign up")
         window.location = "Responsive Navigation Navigation Menu Bar\index.html"
    }
});

// sign out 

let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signout clicked");
    auth.signOut();
    alert("signout clicked")
});