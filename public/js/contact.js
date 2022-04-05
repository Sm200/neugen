// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDvCuCC51slsDCNbG674fofLLlz3PQVwr4",
  authDomain: "zone11.firebaseapp.com",
  projectId: "zone11",
  storageBucket: "zone11.appspot.com",
  messagingSenderId: "291680898610",
  appId: "1:291680898610:web:f27082f57b6f5dd099362b",
  measurementId: "G-LPCCL6QBWL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();


let contactName = document.getElementById("cname");
let contactEmail = document.getElementById("cemail");
let contactMsg = document.getElementById("cmessage");

// let ipAddress;
// let apiUrl = "https://api.ipify.org";
// axios.get(apiUrl)
// .then(response => ipAddress = response.data)
// .catch(error => console.error(error));

function submitForm() {
  if(contactName.value.trim().length != 0 && contactEmail.value.trim().length != 0 && contactMsg.value.trim().length != 0) {
    // Add a new document "IPaddress" in collection "Contact Details"
    db.collection("Contact Details").doc(contactEmail.value).set({
      name: `${contactName.value}`,
      message: `${contactMsg.value}`
    })
    .then(function() {
      document.getElementById("cmsgSubmit").innerHTML = "<p>Message submitted!!</p>";
      setTimeout(() => location.reload(), 1000);
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }
}
