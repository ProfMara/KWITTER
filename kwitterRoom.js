
//ADICIONE SEU LINK DO FIREBASE
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

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
}

var campo ='';

function lerDados(){
  database.ref("/").on("value",(data)=>{
    campo ='';
    data.forEach((subpasta)=>{
      sala = subpasta.key;
      linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
      campo +=linha;
    });
    document.getElementById("output").innerHTML = campo;
  })
}
lerDados()

function irSala(sala){
  localStorage.setItem("roomName", sala);
  window.location = 'kwitterPage.html'
}



//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}
