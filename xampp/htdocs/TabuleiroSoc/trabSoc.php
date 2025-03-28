<?php

/*
Como a tabela deve ser criada:

CREATE TABLE jogadores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    jogador1 INT DEFAULT 0,
    jogador2 INT DEFAULT 0,
    jogador3 INT DEFAULT 0,
    jogador4 INT DEFAULT 0
);
INSERT INTO jogadores VALUES (1, 0, 0, 0, 0);
*/

$host = 'localhost';
$user = 'root';
$password = '';
$schema = 'tabela_tabuleiro';
$conn = new mysqli($host, $user, $password, $schema);

/*Testa se a conexão falhou*/
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

/*Essa é a função que atualizará os pontos dos jogadores ao clicarem
no botão*/
function score($jogador){
    global $conn;

    $sql = "UPDATE jogadores SET $jogador = $jogador + 1 WHERE id = 1";

    /*Testa se o score do jogador pôde ser atualizado*/
    if ($conn->query($sql) === TRUE) {
        echo "Score atualizado com sucesso!";
    } else {
        echo "Erro ao atualizar o score: " . $conn->error;
    }
}

/*Verifica qual dos botões foram clicados*/
if (isset($_POST['jogador1'])) {
    score('jogador1');
} elseif (isset($_POST['jogador2'])) {
    score('jogador2');
} elseif (isset($_POST['jogador3'])) {
    score('jogador3');
} elseif (isset($_POST['jogador4'])) {
    score('jogador4');
}

/*Busca o score de cada jogador para mostra-los no momento atual*/
$slct = "SELECT * FROM jogadores WHERE id = 1";
$result = $conn->query($slct);
$row = $result->fetch_assoc();
$jogador1_score = $row['jogador1'];
$jogador2_score = $row['jogador2'];
$jogador3_score = $row['jogador3'];
$jogador4_score = $row['jogador4'];
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="Custom.css">
        
    </head>
    <table>
        <body>
            <tr>
                <header>
                    <div class="titulo"><h1>Tabuleiro Sociológico</h1></div>
                </header>
            </tr>
            <tr id="meio">
                <nav class="NavContainer">
                    <ul class="menu">
                        <li><a href="Tutorial.html"><b>Como Jogar</b></a></li>
                        <li><a href="Cartas.html"><b>Desafios</b></a></li>
                    </ul>
                </nav>
                <h2>Dado do Tabuleiro Sociológico</h2>
                
                <form method="post" id="formulario">
                    <div id="Jogadores">

                    <!--Mostra o score dos jogadores-->
                        <div class="divino">
                            <p id="Jogador1"><?php echo $jogador1_score; ?></p>
                            <button type="submit" name="jogador1" id="botao1">Jogador 1 Venceu!</button>
                        </div>

                        <div class="divino">
                            <p id="Jogador2"><?php echo $jogador2_score; ?></p>
                            <button type="submit" name="jogador2" id="botao2">Jogador 2 Venceu!</button>
                        </div>
                        
                        <div class="divino">
                            <p id="Jogador3"><?php echo $jogador3_score; ?></p>
                            <button type="submit" name="jogador3" id="botao3">Jogador 3 Venceu!</button>
                        </div>
                        
                        <div class="divino">
                            <p id="Jogador4"><?php echo $jogador4_score; ?></p>
                            <button type="submit" name="jogador4" id="botao4">Jogador 4 Venceu!</button>
                        </div>
                        
                    </div>

                </form>
                
                <div id="DivIMG">
                    <img src="Dado.jpg" id="NumDado">
                </div>
                <div class="CartasBaralho">
                    <button onclick="SortearCartas1()"><b>Puxar Carta de Cor 1</b></button>
                    <button onclick="SortearCartas2()"><b>Puxar Carta de Cor 2</b></button>
                    <button onclick="SortearCartas3()"><b>Puxar Carta de Cor 3</b></button>
                </div>

                <p id="Cor1"><b></b></p>
                <h3><b>Clique no Botão Para Rolar o dado</b></h3>
            </tr>

            <tr>
            <footer>

                <div class="NavFooter">
                    <button id="Dado" onclick="Sortear()">Rolar Dado</button>
                </div>
                
            </footer>
            </tr>

            <script src="Random.js"></script>
        </body>
    </table>
    
</html>

