
var palabras= ["SOFTWARE","VARIABLE","ALURA","ORACLE","PROGRAMACION","JAVASCRIPT","LENGUAJE"];

agregar = document.querySelector("#nueva-palabra");
agregar.addEventListener("click",verificarPalabras);

function verificarPalabras(){
    var inputPalabra = document.querySelector("#input-nueva-palabra").value.toUpperCase();
    if(isNaN(inputPalabra)&&(inputPalabra!=""))
    {
        palabras.push(inputPalabra);
        console.log("exito");
        console.log("palabra cargada correctamente" +palabras);
        
        swal({
            text:"Palabra agregada correctamente",
            icon: "success",
            button: false,
            timer:2000,
        
       })
    }
        else{
            console.log("error de palabra vacia");
            swal({
                text: "Por favor ingrese una palabra",
                icon: "error",
                buttons:false ,
                timer:2000,
            })
    }
    }




var comienzaJuego=document.querySelector("#iniciar-juego");
comienzaJuego.addEventListener("click",seleccionaRandom);


var palabraSecreta;
var palabraGuiones;

function seleccionaRandom() 
    {

    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)]

    console.log("la palabra secreta es: "+palabraSecreta);

    palabraGuiones = palabraSecreta.replace(/./g , "_ ");
    console.log(palabraGuiones);
    
    var secreto = document.querySelector("#palabraSecreta");
    secreto.textContent = palabraGuiones;
    }

    