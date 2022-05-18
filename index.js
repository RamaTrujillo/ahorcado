var palabra=null
var boton = document.getElementById("juegue")
boton.onclick= function iniciar(){
    var palabra = document.getElementById("palabra").value;
    palabra=palabra.toUpperCase()
    var respuesta=[];
    var erroresl=[];
    var j = palabra.length;
    parseInt(j)
    var error=0;
    var acum=0;
    var cuenta=0;
    var cuenta2=0;
    var espacio=0;
    const array=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    for (var z in palabra){
        respuesta.push(" _ ")
    }
    for (var ñ in palabra){
        if(palabra[ñ]==" "){
            espacio=espacio+1
        }
        for (var m in array){
            if(palabra[ñ]==array[m]){
                cuenta=cuenta+1
            }
        }
    }
    if ((cuenta!=j)||(j==0)||(espacio!=0)){
        alert("Ingrese una palabra válida (solo letras)");
        return
    }
    letra=prompt("Ingrese letra "+ erroresl +"\n"+ respuesta + " \n" + "errores " + error +"/5");
    letra=letra.toUpperCase()
    while(letra!="SALIR"){
        if (((letra.length)==1)&&(array.includes(letra))&&(!(erroresl.includes(letra)))){
            erroresl.push(letra);
            for (var i in palabra){
                if (letra==palabra[i]){
                respuesta[i]=letra
                alert("Adivinaste")
                }
                else{
                acum=acum+1
                }
            }
        }
        else{
            alert("Ingrese una letra válida")
        }
        if (j==acum){
        error= error+1
        alert ("No adivinaste")
        acum=0
        }
        else{
            acum=0
        }
        var a=respuesta.join("")
        if (palabra==a){
            alert("Ganó la palabra era " + a);
            break;
        }
        if (error==5){
            alert("Usted perdió la palabra era " + palabra);
            break;
        };
        letra=prompt("Ingrese letra, usted ya dijo: "+ erroresl +"\n"+ respuesta + " \n" + "errores " + error +"/5");
        letra=letra.toUpperCase();
    };
}