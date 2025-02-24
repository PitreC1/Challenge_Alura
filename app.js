let amigos = []; //Array para guardar el nombre de los amigos



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
    document.getElementById("resultado").innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        document.getElementById("resultado").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
    }   
}
