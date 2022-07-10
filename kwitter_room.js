var firebaseConfig = {
    apiKey: "AIzaSyBjiwuE4WggME1SvQ6PX2VnKGG0gnCDpKY",
    authDomain: "let-s-chat-web-app-e9cd3.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-e9cd3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-e9cd3",
    storageBucket: "let-s-chat-web-app-e9cd3.appspot.com",
    messagingSenderId: "794598441748",
    appId: "1:794598441748:web:cf8003c7860e302acbb801"
  };
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      localStorage.setItem('room_name', room_name);
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + room_name);
row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logOut()
{
localStorage.removeItem(user_name);
window.location = "index.html";
}

 
