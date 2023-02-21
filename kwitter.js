
//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyD-GxWJxYciaM8XdrEgSubEaK_qNe8Z2bk",
  authDomain: "banco-de-dados-database.firebaseapp.com",
  databaseURL: "https://banco-de-dados-database-default-rtdb.firebaseio.com",
  projectId: "banco-de-dados-database",
  storageBucket: "banco-de-dados-database.appspot.com",
  messagingSenderId: "97828710716",
  appId: "1:97828710716:web:1604dcd1c7a51046d45639",
  measurementId: "G-FDGY8V42QV"
};


firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//adiciona o usuário
function addUser() {
  //guarda o que o nome que o usuário digitou
  userName = document.getElementById("userName").value;
  //coloca na memória do navegador
  localStorage.setItem("userName", userName);

  
  //troca de site
  window.location = "kwitterRoom.html";
}

