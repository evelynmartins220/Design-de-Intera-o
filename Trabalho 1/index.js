var root = document.querySelector(":root");

function novoNome(){
    let valor = document.getElementById("input-nome").value;
    document.getElementById("nome-cartao").innerHTML = valor;
}

function novoInsta(){
    let valor = document.getElementById("input-insta").value;
    document.getElementById("insta-cartao").innerHTML = valor;
}

function novoTel(){
    let valor = document.getElementById("input-telefone").value;
    document.getElementById("tel-cartao").innerHTML = valor;
}

function novaCor(){
    let valor = document.getElementById("input-cor").value;
    root.style.setProperty("--var-cartao-cor", valor);
}

function novaBorda(){
    let valor = document.getElementById("input-borda").value;
    root.style.setProperty("--var-cartao-borda", valor+"px");
}

function novaImg(){
    let valor = document.getElementById("input-img");
    if(valor.files[0].type == "image/jpeg" || valor.files[0].type == "image/png" || valor.files[0].type == "image/webp"){
        document.getElementById("img-cartao").src = URL.createObjectURL(valor.files[0]);
    }else{
        alert("Escolha um arquivo de imagem válido!");
    }
}

function novoTamanho(){
    let valor = document.getElementById("tamanho-select").value;
    valor = valor.split("x");
    root.style.setProperty("--var-cartao-width", valor[0]+"px");
    console.log(valor[0]);
    root.style.setProperty("--var-cartao-height", valor[1]+"px");
    console.log(valor[1]);
    if(valor[0] == 600){
        root.style.setProperty("--var-img-width", "150px");
        root.style.setProperty("--var-img-height", "150px");
    }else{
        root.style.setProperty("--var-img-width", "100px");
        root.style.setProperty("--var-img-height", "100px");
    }
}