let qtdd = 0;
let qtdd2 = 0;
let mudar = 0;
let imgEscolhida = document.getElementById("escolhida");
let principal = document.getElementById("principal");
let tamanhoFonteInicial = 30;
let fonte = "'Times New Roman', Times, serif";
let cor = "black";
let texto = "";


function mudaImagem(element) {
    let novoItem = `<div id="escolhida"><img style="flex: 100%;text-align: center;font-size: 2rem;width: 600px;height: 300px;" src="${element.src}" id="${element.id}"></div>`

    if (qtdd == 0) {
        principal.innerHTML += novoItem;
        qtdd++
    } else {
        escolhida.remove();
        principal.innerHTML += novoItem;
    }
}

function enviar() {
    texto1 = document.getElementById("txt-escrito");
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto1.value}</label>`

    if (qtdd2 == 0) {
        principal.innerHTML += inserir;
        qtdd2++
    } else {
        document.getElementById("label-txt").remove();
        principal.innerHTML += inserir;
    }
    texto = texto1.value;
}

function aumentarTamanho() {
    if (tamanhoFonteInicial >= 70) {
        return;
    } else {
        tamanhoFonteInicial += 5;
    }
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function diminuirTamanho() {
    if (tamanhoFonteInicial <= 20) {
        return;
    } else {
        tamanhoFonteInicial -= 5;
    }
    document.getElementById("label-txt").remove();
    texto1 = document.getElementById("txt-escrito");
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudarFonte() {
    if (mudar == 0) {
        fonte = "Arial, Helvetica, sans-serif"
        mudar++;
    } else if (mudar == 1) {
        fonte = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
        mudar++;
    } else if (mudar == 2) {
        fonte = "'Times New Roman', Times, serif"
        mudar = 0;
    }
    document.getElementById("label-txt").remove();
    texto1 = document.getElementById("txt-escrito");
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudaCorPreto() {
    cor = "black";
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudaCorBranco() {
    cor = "white";
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudaCorAzul() {
    cor = "blue";
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudaCorAmarelo() {
    cor = "yellow";
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function mudaCorVerde() {
    cor = "green";
    document.getElementById("label-txt").remove();
    let inserir = `<label id="label-txt" style="position: absolute; max-width: 500px; background-color: transparent; right: center;top: center; font-weight: bold; font-size: ${tamanhoFonteInicial}px; text-decoration: white; word-break: break-all; text-align: center; font-family: ${fonte};color: ${cor};">${texto}</label>`
    principal.innerHTML += inserir;
}

function chamaJson() {
    console.log("chamando jsonnnnnn");
    $.getJSON("/Json/msg.json", function (data) {
        msgs = data.msgs;
        select = document.getElementById("msgs");
        select.innerHTML = '<option>Selecione</option>';
        for (i = 0; i < msgs.length; i++) {
            select.innerHTML = select.innerHTML + `<option id="msg${i}">` + msgs[i].text + `</option>`;
        }
    });
}

function msgInserida(id) {
    texto1 = document.getElementById("txt-escrito");
    texto1.innerHTML = id;
    texto = id;
}


function trocaDiv() {
    let divTroca = document.getElementById("divTrocada");
    let classeDivTroca = divTroca.className;
    let btn = document.getElementById("btn-mudar-div");

    let div1 = `
    <div class="container">
    <h2>Escolha a sua Imagem de Fundo</h2>
    <div id="imgs">
        <img src="Imagens/img1.jpg" id="img1" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img2.jpg" id="img2" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img3.webp" id="img3" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img4.jpg" id="img4" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img5.jpg" id="img5" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img6.jpg" id="img6" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img7.jpg" id="img7" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img8.webp" id="img8" class="img-escolha" onclick="mudaImagem(this)">
        <img src="Imagens/img9.jpg" id="img9" class="img-escolha" onclick="mudaImagem(this)">
    </div>
    </div>
    `
    let div2 = `
    <div class="container">
        <h2>Escolha o seu Texto</h2>
        <div id="opcoestxt">
            <select id="msgs" onchange="msgInserida(this.value)"></select>
        </div>
        <div id="texto">
            <textarea id="txt-escrito" placeholder="Escreva Aqui" maxlength="50"></textarea>
            <button id="btn-enviar" onclick="enviar()">Enviar</button>
        </div>
    </div>
    `
    let div3 = `
    <div class="container">
        <h2>Edite o seu Texto</h2>
        <div id="edicoes-txt">
            <button class="btn-edicao" id="btn-aumentar-tamanho" onclick="aumentarTamanho()">Aumentar Tamanho</button>
            <button class="btn-edicao" id="btn-diminuir-tamanho" onclick="diminuirTamanho()">Diminuir Tamanho</button>
            <button class="btn-edicao" id="btn-mudar-fonte" onclick="mudarFonte()">Mudar a fonte</button>
        </div>
        <div id="edicao-cor-txt">
            <div class="cor-txt" id="txt-preto" onclick="mudaCorPreto()"></div>
            <div class="cor-txt" id="txt-branco" onclick="mudaCorBranco()"></div>
            <div class="cor-txt" id="txt-azul" onclick="mudaCorAzul()"></div>
            <div class="cor-txt" id="txt-amarelo" onclick="mudaCorAmarelo()"></div>
            <div class="cor-txt" id="txt-verde" onclick="mudaCorVerde()"></div>
        </div>
    </div>
    `

    if (classeDivTroca == 0) {
        classeDivTroca = 1;
        divTroca.classList.remove(0)
        divTroca.classList.add(1)
        divTroca.innerHTML = div1;
        btn.innerText = "Escolher Texto";
    } else if (classeDivTroca == 1) {
        classeDivTroca = 0;
        divTroca.classList.remove(1)
        divTroca.classList.add(2)
        divTroca.innerHTML = div2
        btn.innerText = "Editar Texto";
        chamaJson();
    }else if (classeDivTroca == 2) {
        classeDivTroca = 0;
        divTroca.classList.remove(2)
        divTroca.classList.add(0)
        divTroca.innerHTML = div3
        btn.innerText = "Escolher Imagem";
    }
}