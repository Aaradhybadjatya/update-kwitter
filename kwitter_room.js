
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyA187SUjLQCDjy3uyy-xBYOxfXFyIgRYpM",
      authDomain: "kwitter-15ee7.firebaseapp.com",
      databaseURL: "https://kwitter-15ee7-default-rtdb.firebaseio.com",
      projectId: "kwitter-15ee7",
      storageBucket: "kwitter-15ee7.appspot.com",
      messagingSenderId: "939521603702",
      appId: "1:939521603702:web:c29055923e3d75909d8757"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome " + user_name+"!";

  function addRoom()
{
room_name=document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"

});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- "+Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";

}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}