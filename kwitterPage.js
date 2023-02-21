//LINKS FIREBASE
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
//FACILITAR A SUA VIDA
var db = firebase.database();

//pegar os valores do localStorage
var nomeSala = localStorage.getItem("roomName");
var nome = localStorage.getItem("userName");

function enviar(){
  var msg = document.getElementById("msg").value;
  db.ref(nomeSala).push({
    msg:msg,
    like:0,
    nome:nome
  })
  document.getElementById("msg").value = '';
}

//ler do banco de dados as mensagens e mostrar na tela
db.ref(nomeSala).on("value", (data)=>{
  //limpa a div
  document.getElementById("output").innerHTML = '';
  //repete comando para cada valor
  data.forEach((dados)=>{
    if(dados.key != 'proposito'){
      var id = dados.key;
      var valores = dados.val();

      var mensagem = valores['msg'];
      var nome = valores['nome'];
      var likes = valores['like'];
      //faz uma tag html para a mensagem
      var msghtml  =  "<h3> "+ mensagem +"<img src='selo.png' width=20 height=20/></h3>";
      //faz uma tag html para o nome
      var nomehtml = "<h4 class='text-muted'> "+nome+"</h4>";
      //faz um botão para os likes
      var botaoLike = "<button class='btn btn-warning' id="+id+" value="+likes+" onclick='attLike(this.id)'>";
      var likeshtml = "<span class='glyphicon glyphicon-thumbs-up'></span>Likes:"+likes+"</button>";
      linha = msghtml + nomehtml + botaoLike + likeshtml;
      document.getElementById("output").innerHTML += linha
    }
  })
})

function attLike(id){
  likes = document.getElementById(id).value;
  likes = Number(likes) + 1;
  db.ref(nomeSala).child(id).update({
    like:likes
  })
}
