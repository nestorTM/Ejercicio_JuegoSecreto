
let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Escoge un numero entre 1 y 10';


//funcion para asignarle texto a elementos como h1 o p o h2, etc...
function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//funcion para verificar un intento y adivinar el numero
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario === numeroSecreto);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);

        //boton reiniciar despues de ganar
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{

        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
            
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    //alert('click desde el boton');

    return;
}

//funcion para limpiar la caja de escritura
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

//funcion para generar un numero secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length===numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles`);
    }
    else{
        //si el numero generado esta incluido en la lista hacemos algo si no hacemos otra cosa
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

//funcion de mensajes iniciales y condiciobes iniciales
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Escoge un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

//funcion para reiniciar el juego
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


let lista3 = [1,2,3,4,5];


function sumaListas(l3){

    let listaResultado = [];
    let contador = 0;
    while (contador < lista3.length){
        listaResultado.push(lista3[contador]*lista3[contador]);
        contador++;
    }
    console.log(listaResultado);
}
sumaListas(lista3);