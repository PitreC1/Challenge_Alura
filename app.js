let amigos = []; //Array para guardar el nombre de los amigos
let listaAmigosSorteados = [];
let indices = [];

function agregarAmigo(){
    if (document.getElementById("amigo").value == ''){
        //Cuando este vacio muestre una alerta
        alert("Por favor, inserte un nombre")
    }
    else{
        //cuando ingrese un nombre guarde en lista
        amigos.push(document.getElementById("amigo").value);
        document.getElementById("amigo").value = "";
        actualizarListaAmigos();
    }   
}

function actualizarListaAmigos(){
    //limpiamos la lista en el HTML
    document.getElementById("listaAmigos").innerHTML = "";

    //recorremos la lista
    for (let i = 0; i < amigos.length; i++) {
        //se mapea cada elemento de la lista para agregarlo al HTML
        document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    }   
}

function sortearAmigo(){
    if (amigos.length == 0){
        //la lista esta vacia
        alert("Por favor, ingrese un nombre")
    }
    else{
        //seleccionar el amigo sorteado
        indice = generarIndice()
        if (indice == null){return};
        
        listaAmigosSorteados.push(amigos[indice]);
        document.getElementById("resultado").innerHTML = `<li>${listaAmigosSorteados[listaAmigosSorteados.length-1]}</li>`;
        
    }
}

function generarIndice(){
    
    //si ya se sorteo todos los nombres
    if(listaAmigosSorteados.length == amigos.length){
        alert("Se sortearon todos los amigos posibles");
        
    }
    else{
        indiceGenerado = Math.floor(Math.random()*amigos.length);
        if (indices.includes(indiceGenerado)){
            return generarIndice();
        }else{
            indices.push(indiceGenerado);
            return indiceGenerado;
        }
        
    }
}