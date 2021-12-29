<!DOCTYPE html!>
  <html lang="en">
    <head>
    <meta charset="UTF-8">
      <meta name= "viewport" content="widthdevice-width,initial-scale=1.0">
        <title>Registro de Cliente</title>
link rel = "stylesheet" href = "css/style.css">
</head>
<body>
  <div id= "main-container">
    <h1>Cadastre-se para acessar a barbearia</h1>
<form id = "register form"
<div class = "full-box">
  <label for "email">E-mail</label>
<input type= "email"name="email"id="email"placeholder="Digite seu e-mail">
  </div>
<div class = "half-box">
  <label for"name">Nome</label>
<input type="text" name= "name" id="name"placeholder="Digite o seu nome">
  </div>
<div class = "half-box">
  <label for"lastname">Sobrenome</label>
<input type="text" name= "lastname" id="lastname"placeholder="Digite o seu sobrenome">
  </div>
div class = "half-box">
  <label for"password">Senha</label>
<input type="password" name= "password" id="password"placeholder="Digite a sua senha">
  </div>
div class = "half-box">
  <label for"passConfirmation">Sobrenome</label>
<input type="password" name= "passConfirmation" id="passConfirmation"placeholder="Confirme a sua senha">
  </div>
<div class="full-box">
 <input type="checkbox" name="agreement" id ="agreement">
   <label for="agreement" id "agreement-label">Eu li e aceito os<a href="#">termos de uso</a></label>
  </div>
<div class="full-box">
 <input type="submit" id ="btn-submit" value="Registrar">
   <label for="agreement" id "agreement-label">Eu li e aceito os<a href="#">termos de uso</a></label>
  </div>
</form> 
    </div>
<p class="error-validation template></p>
  <script src= "js/script.js"></script>
</body>
</html>
