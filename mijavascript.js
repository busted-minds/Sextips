{   // INICIALIZACION DE VARIABLES GLOBALES 
    var cuestionarios=[];
    // cuestionarios.push(["Morderlo / Que me muerda","Que él me muerda / Morderla","Atarlo y excitarlo hasta que no de más / Que ella me ate y me excite hasta no dar más"]);
    cuestionarios.push(["Do it standing up, against the wall", "Dress up for him (schoolgirl, nurse, stewardess, etc.) / That she dress up (schoolgirl, nurse, stewardess, etc.)", "That he dress up (firefighter, thief, etc.) , teacher, etc.) / Dress up for her (firefighter, thief, teacher, etc.) "," Sex marathon for hours "," Masturbate him / Let her masturbate me "," Let him masturbate me / Masturbate her "," Oral sex with a peppermint in her mouth "," Let each one confess their fantasy and put it into practice "," Have phone sex "," Make him Turkish / Make me Turkish "]);
    cuestionarios.push(["Make him a striptease / Let her strip me", "Let him strip me / Make a striptease of her", "Play with ice", "Tie him / Let her tie me", "Let him tie me / Tie her "," Have sex with his soccer team jersey / Put on my soccer team jersey for sex "," Practice the Kamasutra poses "," Wake him up with a lick / Let him wake me up with a lick " , "Do it on the table", "Outdoor sex"]);
    cuestionarios.push(["Oral sex with cream or dulce de leche", "Hit him / Let her hit me", "Let him hit me / Hit her", "Sex in the sea", "Get excited in public by telling us what we will do later", "Make him an erotic lingerie parade / Let me do an erotic lingerie parade "," Dramatize a boss and secretary scene "," Dramatize a lady and butler scene "," Give her a wave lick before going to work / Let me make a wave suck before going to work "," Blindfold him / That blindfolds me "]);
    cuestionarios.push(["That blindfolds me / Blindfolds him", "Take hot photos", "Sex in the car", "Bite him / Let him bite me", "Let him bite me / Bite her", "Have sex stoned", "Sexting : send us messages and hot photos "," Practice tantric sex, holding the orgasm, without moving for a long time "," Oil ourselves "," Do it with the heels on / Let them do it with the heels on "]);
    cuestionarios.push(["Talking dirty", "Making a quickie in the elevator stopped between two floors", "Dressing very provocative in public for him / Her to dress very provocative in public for me", "Looking at each other while each masturbates", "What Finish me on the tits / Finish him on the tits "," Let him finish me in the mouth / Finish him in the mouth "," Let him finish me on the face / Finish him on the face "," Let him give me analingus / Give him analingus " , "Make her analingus / Let her make me analingus", "Watch pornography together"]);
    cuestionarios.push(["Do it in the shower", "Practice anal sex", "Have sex in a public place (beach, parking lot, forest ...)", "Suck it while driving / Let me suck it while driving", "Let me masturbate while driving / Masturbating her while driving "," Swallow semen after oral sex / Swallow semen after oral sex "," Have sex in a bar bathroom "," Insult him / Let her insult me ​​"," Let him insult me ​​/ Insult her "," Crawl around the house / Let him crawl around the house "]);
    cuestionarios.push(["Filming ourselves while we do it", "Trying harder sex", "Incorporating a vibrator into sexual play", "Pretend that I am a prostitute / Play that she is a prostitute", "Give her a massage with a happy ending / Let her do a massage with a happy ending "," Let him give me a massage with a happy ending / Give him a massage with a happy ending "," Have sex totally drunk "," Lick us all over the body "," Let him stick a finger in my ass / Put a finger in his ass "," Put a finger in his ass / Put a finger in my ass "]);
    cuestionarios.push(["To go out without panties, with a miniskirt / Let me go without panties, with a miniskirt", "Do it TO THE SCREAMS!", "That he dress as a woman for sex / Dress me in womens clothing for sex", "open window knowing that they are watching us "," Let him catch me asleep / Catch her asleep "," Rough sex with bites, slaps and hair pulling "," Let him suck my feet / Suck her feet "," Suck her feet / What Suck my feet "," Practice sadomasochism, be the dominant / Practice sadomasochism, be the dominated "," Practice sadomasochism, be the dominated / Practice sadomasochism, be the dominant "]);
    cuestionarios.push(["Go to a bowling alley with him and provoke another woman / Go to a bowling alley with her and provoke another woman "," Go to a bowling alley with him and provoke another man / Go to a bowling alley with her and provoke another man "," Sex on the terrace of the building "," Masturbate him with her feet / Let her masturbate me with her feet "," Let him masturbate me with her foot / Masturbate her with the foot "," Sex on a plane "," Make a threesome with another woman "," Make a threesome with another man "," Make a threesome with a transvestite "," Make an exchange with another couple "]);
    cuestionarios.push(["Dress in leather or latex", "Make me golden shower / Make him golden shower", "Make him golden shower / Make me golden shower", "Suck it while I put a finger in his ass / Let him suck it while he puts me a finger in the ass "," Let him suck it while he puts a finger in my ass / Suck it while I put a finger in his ass "," Tell us in detail how we did it with our exes "," Play rape " , "See how he has sex with someone else", "Put a dildo up my ass / Put a dildo up my ass", "Put a dildo up my ass / Let me put a dildo up my ass"]);
    cuestionarios.push(["That he be my slave / Be his slave", "Be his slave / That she be my slave", "That he have sex with another woman without knowing / Have sex with another woman without her knowing", "Have sex with another man without him knowing / That she has sex with other men without knowing "," That he has sex with another woman and tells me / Have sex with another woman and tell her "," Have sex with another man and tell him / For her to have sex with another man and tell me "," Go to a swinger bowling alley to watch "," Go to a swinger bowling alley and have sex in public "," Go to a swinger bowling alley and exchange partners "," Participate in an orgy "]);   
    var titulo = "THE SEXUAL TEST IN COUPLE!";
    var subtitulo = "For those who want to innovate but do not dare to propose ";
    var titulo2 = "They sent you this sex test!";
    var subtitulo2 = " already answered it. Now you answer it. They will not know each other's answers unless they match";
    var nombre = [""];
    var recomendaciones = ["Soulmates! They like the same bullshit. Let's continue enjoying! "," Soul mates! They like the same bullshit. Let's continue enjoying! "," You have a great bed and a lot to explore! "," You have some coincidences, keep fucking! ... "," They still have a long way to go! ... "," They don't dare to do anything or don't agree on anything, better go to the movies!"];
    var nivel=1;
    var cuestionario = cuestionarios[nivel-1];
    var cantPreguntas = cuestionario.length;
    var coincidencias=[];
    var yaJugaron = 0;
    var jugador = 0;
    var nroDePregunta = 0;
    var lineasPorPantalla = 10;
    var respuestas = new Array();
    
    for (var i=0; i<2; i++) {
        respuestas[i]=new Array();
        for (var j=0;j<cantPreguntas;j++) {
        respuestas[i][j]="nada";
        }
    }
    
    // PARSEAR LAS RESPUESTAS DE LA PAREJA PASADAS EN LA URL 
    //(SI LAS HAY) Y CARGARLAS EN EL ARRAY RESPUESTAS[]
    var param = location.search.split('?')[1];
    // var param = "15FHJLNPRTVX";

    // Si es nuevo ir a Intro si no ir a Presentacion2
}    
{    // ACA EMPIEZA A EJECUTARSE EL CODIGO
    if (param == null) {
        intro(); 
    }
    else {
        var cacho = decod(param)
        respuestas[jugador] = cacho;
        cuestionario = cuestionarios[nivel-1];
        // verQueOnda("jugó "+jugador+": " +" nivel: "+ nivel+" resp: "+ respuestas[jugador]);
        yaJugaron=1;
        var vinoRemoto=true;
        jugador = 1-jugador;
        presentacion2();
        }
    // window.scrollTo(0,1);
}

//INTRO
function intro(){
    mostrar("#intro");
    document.getElementById("botonIntro1").onclick = function() {
        ocultar("#intro");
        intro1()}
    document.getElementById("saltearIntro").onclick = function() {
        ocultar("#intro");        
        presentacion()}
}
function intro1(){
    mostrar("#intro1");
    document.getElementById("botonIntro2").onclick = function() {
        ocultar("#intro1");
        intro2()}
}
function intro2(){
    mostrar("#intro2");
    document.getElementById("botonIntro3").onclick = function() {
        ocultar("#intro2");
        intro3()}
}
function intro3(){
    mostrar("#intro3");
    document.getElementById("botonComenzar").onclick = function() {
        ocultar("#intro3");
        presentacion()}
}



//SI ES EL PRIMERO EN CONTESTAR:
function presentacion(){
    pon("#titulo", titulo);
    pon("#subtitulo", subtitulo);
    mostrar("#presentacion");
    // verQueOnda("hola");
    // b("botonElla", comienzaElla());
    document.getElementById("botonElla").onclick = function() {comienzaElla()}
    document.getElementById("botonEl").onclick = function() {comienzaEl()}
}

// SI YA CONTESTÓ OTRO:
function presentacion2(){
    pon("#titulo2", titulo2);
    pon("#nivel2",nivel);
    pon("#subtitulo2", nombre[1-jugador]+subtitulo2);
    pon("#comenzar2","Contesta "+nombre[jugador]);
    ocultar("#botonesEnviar");
    mostrar("#presentacion2");
    document.getElementById("comenzar2").onclick = function() {listo()}
}

// CONTROL DESLIZANTE DE NIVELES
function slider(){
    nivel = document.querySelector("#deslizador").value;
    pon("#nivel",nivel);
    cuestionario = cuestionarios[nivel-1];
    cantPreguntas = cuestionario.length;

}

// TERMINÓ DE CONTESTAR
function listo(){ 
    if (yaJugaron==2) {verResultados()}
    else if (yaJugaron==0 || vinoRemoto) {
        instrucciones();
    }
    else if (yaJugaron==1) {
        ocultar("#cuestionario");
        pon("#ahoraJugador", nombre[jugador]);
        mostrar("#contestaElOtro");
        document.getElementById("botonAhora").onclick = function(){instrucciones()}
        document.getElementById("botonRespondaxWP").onclick = function(){mandarParaQueRespondaxWP()}
        document.getElementById("botonRespondaxMail").onclick = function(){mandarParaQueRespondaxMail()}
    }
    nroDePregunta=0;
}

function instrucciones(){
        ocultar("#presentacion2")
        pon("#jugador", nombre[jugador]);
        ocultar("#presentacion")
        ocultar("#contestaElOtro");
        mostrar("#listo");
        pon("#elOtro", nombre[1-jugador]);
        document.getElementById("botonListo").onclick = function(){comenzarCuestionario()}
}

function comienzaElla(){
    jugador=0;
    listo();
}

function comienzaEl(){
    jugador=1;
    listo();
}

function comenzarCuestionario(){
    document.querySelector("#listo").style.display = 'none';
    document.querySelector("#cuestionario").style.display = 'block';
    ocultar("#presentacion2");
    ocultar("#contestaElOtro");
    mostrar("#cuestionario");
    nroDePregunta = 0;
    document.getElementById("cuestionario").style.backgroundPosition=0;
    mostrarPregunta(0);
}

function mostrarPregunta(n) {
    var pregunta = cuestionario[n];
    var separador = pregunta.indexOf("/");  
    if (separador != -1) {
        if (jugador==0) {
            pregunta = pregunta.slice(0,separador-1);
        }
        else
        {
            pregunta = pregunta.slice(separador+1);
        }
    }
    document.querySelector("#formulario").reset();
    pon("#pregunta", n+1+". "+pregunta);
}

function procesarRespuesta(){
    var resp = Number(document.querySelector("input:checked").value);
    respuestas[jugador][nroDePregunta] = resp;
    nroDePregunta++;
    if (nroDePregunta<cantPreguntas) {
        mostrarPregunta(nroDePregunta);
        // CON CADA RESPUESTA VOY CORRIENDO EL FONDO DE PANTALLA   
        var anchoPantalla = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (anchoPantalla<700) {
            var corrimiento = (1024-anchoPantalla)/cantPreguntas*nroDePregunta;
            document.getElementById("cuestionario").style.backgroundPosition=-corrimiento;
        }
   }
    else {
            jugador = 1-jugador;
            yaJugaron++;
            listo();
    }
}

function verResultados() {
    ocultar("#cuestionario");
    ocultar("#listo");
    mostrar("#resultados");
    // RECOPILAR TODAS LAS COINCIDENCIAS
    coincidencias=[];
    for (var i = 0; i < cantPreguntas; i++) {
        if (respuestas[0][i]+respuestas[1][i] < 2 ) {
        coincidencias.push(cuestionario[i]);
        }
    }

    // MOSTRARLAS EN 1 O 2 PANTALLAS
    var cantCoincidencias = coincidencias.length;
    if (cantCoincidencias <= lineasPorPantalla) {
        var lista="<ol><li>"+coincidencias.join("</li><li>")+"</li></ol>";
        pon("#coincidencias", lista);
        if (cantCoincidencias == 0) {pon("#coincidencias","¡No hay!")}
        ocultar("#botonMas")
        mostrar("#botonDiagnostico");
    }
    else {
        var lista="<ol><li>"+coincidencias.slice(0,lineasPorPantalla).join("</li><li>")+"</li></ol>";
        pon("#coincidencias", lista);
        mostrar("#botonMas");
    }
}

function masResultados() {
    ocultar("#botonMas");
    pon("#coincidencias", coincidencias.slice(lineasPorPantalla).join("<br>"));
    mostrar("#botonDiagnostico");
}

function diagnostico() {
    var recomendacion = "";
    var cantCoincidencias = coincidencias.length;
    var porcentaje = Math.round(cantCoincidencias/cantPreguntas*100);
    recomendacion=5-Math.floor(porcentaje/20);
    var mensajeFinal = "Resultados del Test Sexual en Pareja\r\nCoincidieron en un " + porcentaje + "% " + recomendaciones[recomendacion];
    mensajeFinal += "\r\n\r\nEsto es lo que deberían probar:\r\n" + coincidencias.join("\r\n");
    pon("#porcentaje", porcentaje+"%");
    pon("#recomendacion", recomendaciones[recomendacion]);
    ocultar("#resultados");
    mostrar("#diagnostico");
    verQueOnda("mensajeFinal");
    document.getElementById("botonMandarResultadosxWP").onclick = function(){
        mandarResultadosFinalesxWP(mensajeFinal);
    }
    document.getElementById("botonMandarResultadosxMail").onclick = function(){
        mandarResultadosFinalesxMail(mensajeFinal);}
    document.getElementById("botonCompartir").onclick = function(){compartir();}
}

function compartir(){
    ocultar("#diagnostico");
    mostrar("#compartir");
    document.getElementById("botonMandarLinkxWP").onclick = function(){mandarLinkxWP();}
    document.getElementById("botonMandarLinkxMail").onclick = function(){mandarLinkxMail();}
}

function otraVez(){
    window.location.replace(location.pathname);
}

function verQueOnda(x){
    document.querySelector("#probando").innerHTML = x;
}

function mostrar(x){
    // document.querySelector(".pantallas").style.display = 'none';
    document.querySelector(x).style.display = 'block';
}

function ocultar(x){
    document.querySelector(x).style.display = 'none';
}

function pon(x,y){
    document.querySelector(x).innerHTML = y;
}

function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

function codif(r,j){
    // devuelve cadena con jugador, nivel, respuestas
    var t=[];
    t.push(j);
    t.push(nivel);
    for (var p=0;p<r.length;p++){
        t.push(String.fromCharCode(70+p*2-r[p]));
    }
    t = t.join("");
    return t;
}

function decod(codigo) {
    // recibe cadena con las respuestas codificadas, devuelve array con respuestas, asigna nivel y jugador q ya contestó
    var r = [];
    jugador = codigo.charAt(0);
    nivel = codigo.charAt(1);
    for (var p=0;p<codigo.length-2;p++){
        r.push(-codigo.charCodeAt(p+2)+70+p*2);
    }
    return r;
}

function mandarParaQueRespondaxWP(){
    var codigo = codif(respuestas[1-jugador],1-jugador);
    var cadena = "whatsapp://send?text=";
    cadena += "Hola! Acabo de contestar este test sexual, contestalo vos ahora para ver nuestras coincidencias! ";
    cadena += window.location.href+"?" + codigo;
    window.open(cadena);
}

function mandarParaQueRespondaxMail(mensajeFinal){
    var cadena = "mailto:?Subject=Tu pareja te manda este cuestionario sexual";
    cadena += "&body=Yo ya lo contesté, contestalo ahora vos copiando y pegando esta dirección en tu navegador para ver nuestras coincidencias: ";
    var dire = window.location.href+"?" + codif(respuestas[1-jugador],1-jugador);
    cadena += dire;
    window.open(cadena);
}

function mandarResultadosFinalesxWP(mensajeFinal) {
    var mensajeWp = "whatsapp://send?text=" + window.encodeURIComponent(mensajeFinal);
    verQueOnda(mensajeWp);
    beep();
    window.open(mensajeWp);
}

function mandarResultadosFinalesxMail(mensajeFinal) {
    var cadena = "mailto:?Subject=¡Resultados del Test Sexual en Pareja!";
    cadena += "&body="+window.encodeURIComponent(mensajeFinal);
    window.open(cadena);
}

function mandarLinkxWP(){
    var cadena = "whatsapp://send?text=Mirá que bueno este test! http://sexualtest.xyz";
    window.open(cadena);
}

function mandarLinkxMail(){
    var cadena = "mailto:?Subject=Mirá qué bueno este test";
    cadena += "&body=Tranqui, nadie se entera de lo que contestás. ";
    var dire = "http://sexualtest.xyz";
    cadena += dire;
    cadena = window.encodeURIComponent(cadena);
    window.open(cadena);
}
