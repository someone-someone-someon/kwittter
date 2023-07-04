
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDBYO417nUhnRoNUMymbSpKOrDzbVAwsKA",
  authDomain: "kwitter-3c729.firebaseapp.com",
  databaseURL: "https://kwitter-3c729-default-rtdb.firebaseio.com",
  projectId: "kwitter-3c729",
  storageBucket: "kwitter-3c729.appspot.com",
  messagingSenderId: "903618454631",
  appId: "1:903618454631:web:d170950d912d72a5ca20c2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localstorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";
 
function addRoom() 
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData(){firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+Room_names);
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";


      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localstorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter_page.html";
}