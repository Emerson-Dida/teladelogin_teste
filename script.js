let tentativas = 5;

//capturar os valores de entrada
const acess = document.getElementById("acessar");
const mensagem = document.getElementById('mensagem');
const alerta = document.getElementById('alerta');
const mostrarSenha = document.getElementById("visibility");

mostrarSenha.addEventListener("click", () => {

  let senha = document.getElementById("password");
  
  if(mostrarSenha.textContent == "visibility") {
    mostrarSenha.innerHTML = "visibility_off";
    senha.setAttribute('type', "text");
    
    
  } else {
    mostrarSenha.innerHTML = "visibility";
    senha.setAttribute("type", "password");
  }
})


acess.addEventListener("click", (event) => {
   event.preventDefault();
  verification();
});


function verification() {
 

  let user = document.getElementById('user').value;
  let password = document.getElementById("password").value;

  if(user.length === 0 && password.length === 0) {
    mensagem.innerHTML = "emersonsantoserfsdfg";
    
  } else {
    mensagem.innerHTML = " ";
  }

  if (
    password.length < 8 ||
    !/\d/.test(password) ||
    !/[^A-Za-z0-9]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password)) {
    mensagem.innerHTML = "Usuário ou senha incorretos";
    tentativas--;
  } else {
    mensagem.innerHTML = "Login efetuado com sucesso!";
    mensagem.style.color = "white";
  }
  
  
  if (tentativas === 3) {
    alerta.innerHTML = `Restam ${tentativas}`;
  } else if (tentativas === 2) {
    alerta.innerHTML = `Restam ${tentativas}`;
  } else if (tentativas === 1) {
    alerta.innerHTML = `Restam ${tentativas}`;
  } else if (tentativas === 0) {
    alerta.innerHTML = "Algo inesperado aconteceu, tente novamente após alguns minutos";
    acess.disabled = true;

    setTimeout(() => {
      tentativas = 5;
      alerta.innerHTML = "";
      mensagem.innerHTML = "";
      acess.disabled = false;
    }, 3000);
   
  };

}