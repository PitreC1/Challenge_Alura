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
    }   
}

function actualizarListaAmigos(){
    
}
