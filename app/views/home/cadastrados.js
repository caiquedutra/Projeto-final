<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">
	<title>MicroService - VSAlmeida | IBM</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css"   href="css/style.css">
</head>
<body class="cor">
	<div class="container">
        <h4><b>Usuarios Cadastrados</b></h4>
        <ul>
        <% items.forEach(function(item) { %>
            <li>
                <b>Nome:</b> <%= item.nome %> <%= item.sobrenome %> <br>
                <b>Telefone:</b> <%= item.tel %>
            </li>
        <% }); %>
        </ul>
        <div class="text-center">
            <small> 
                <a href="/" class="text-muted">Pagina de Cadastro</a>
            </small>
        </div>
</div>
</body>
</html>