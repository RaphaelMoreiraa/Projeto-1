function Sortear() {
    let RolarDado = Math.floor(Math.random() * 6) + 1;

    if (RolarDado === 1) {
        document.getElementById("NumDado").src = "dado.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    } else if (RolarDado === 2) {
        document.getElementById("NumDado").src = "dado2.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    } else if (RolarDado === 3) {
        document.getElementById("NumDado").src = "dado3.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    } else if (RolarDado === 4) {
        document.getElementById("NumDado").src = "dado4.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    } else if (RolarDado === 5) {
        document.getElementById("NumDado").src = "dado5.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    } else if (RolarDado === 6) {
        document.getElementById("NumDado").src = "dado6.jpg"
        document.getElementById("NumDado").style.display = "block"
        document.getElementById("DivIMG").style.paddingTop = "8%";
    }
}

function SortearCartas1() {
    let RolarDado = Math.floor(Math.random() * 6) + 1;
    if (RolarDado === 1) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº1: No Materialismo histórico, Karl Marx defendia que o capitalismo não era eterno ou imutável, por que ele tinha essa opinião?';
    } else if (RolarDado === 2) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº2: "Não existem “leis” sociais da evolução da história", esse foi um dos princípios escrito por Karl Marx e Friedrich Engels. Que tipo de pessoas acreditavam no contrário desta afirmação feita pelos sociólogos?';
    }else if (RolarDado === 3) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº3: O que Karl Marx e Friedrich Engels acreditavam que "O modo de produção" causava na sociedade?';
    }else if (RolarDado === 4) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº4: Por qual motivo Karl Marx e Friedrich Engels Defendiam que "a história da humanidade até os nossos dias é a história da luta de classes."?';
    }else if (RolarDado === 5) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº5: Segundo o Materialismo Histórico, quais pessoas eram reponsáveis por todos os movimentos históricos?';
    }else if (RolarDado === 6) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº6: É citado por Karl Marx que "as idéias dominantes são as idéias das classes dominantes.", logo em seguida, ele diz o motivo dessas ideias dominantes existirem, qual é o motivo citado por Marx?';
    }
    
}
function SortearCartas3() {
    let RolarDado = Math.floor(Math.random() * 5) + 1;
    if (RolarDado === 1) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº1: Em qual Século o Materialismo Histórico foi escrito?';
    } else if (RolarDado === 2) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº2: Quem foi o fundador do Método Sociológico?';
    }else if (RolarDado === 3) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº3: “A história de todas as sociedades até hoje é a história das lutas de classes." Quem disse essa frase?';
    }else if (RolarDado === 4) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº4: "As ideologias que servem para manter a ordem são consideradas CONSERVADORAS; as ideologias que servem para transformar a ordem são consideradas CRÍTICAS E REVOLUCIONÁRIAS." Sobre qual ideologia essa frase de Karl Marx esta falando?';
    }else if (RolarDado === 5) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº5: O que o Termo "Mais-Valia" significa na Teoria Marxista?';
    }
    
}
function SortearCartas2() {
    let RolarDado = Math.floor(Math.random() * 5) + 1;
    if (RolarDado === 1) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº1: Cite 5 diferentes nomes de sociólogos que foram principalmente importantes para a história da sociologia.';
    } else if (RolarDado === 2) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº2: O que é "Modo de Produção" citado no Materialismo Histórisco? (Responda De Forma Resumida.)';
    }else if (RolarDado === 3) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº3: Quais são os 3 pilares da sociologia?';
    }else if (RolarDado === 4) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº4: Quem é o "Pai da Sociologia" e qual movimento essa pessoa fundou?';
    }else if (RolarDado === 5) {
        const elementoB = document.getElementById('Cor1').querySelector('b');
        elementoB.textContent = 'Nº5: No Materialismo Histórico, Marx e Engel explicam como surgiu a concentração de riquezas. O que foi escrito por eles? (Responda Resumidamente)';
    }
    
}