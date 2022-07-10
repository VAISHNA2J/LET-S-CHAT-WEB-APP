

var firebaseConfig = {
    apiKey: "AIzaSyBjiwuE4WggME1SvQ6PX2VnKGG0gnCDpKY",
    authDomain: "let-s-chat-web-app-e9cd3.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-e9cd3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-e9cd3",
    storageBucket: "let-s-chat-web-app-e9cd3.appspot.com",
    messagingSenderId: "794598441748",
    appId: "1:794598441748:web:cf8003c7860e302acbb801"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 } });  }); }

 getData();

 function send()
 {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg, 
        like:0
    })
document.getElementById("msg").value = "";
 }
 
function logOut()
{
localStorage.removeItem("user_name");
window.location = "index.html";
}
