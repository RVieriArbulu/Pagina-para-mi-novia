/* ==========================
   VENTANA DE BIENVENIDA Y MÚSICA
   ========================== */
function cerrarVentana() {
    document.getElementById("bienvenida").style.display = "none";
    document.getElementById("musica").play();
}

/* ==========================
   CONTADOR DE TIEMPO
   ========================== */
let inicio = new Date("2025-04-09");
function actualizar() {
    let ahora = new Date();
    let diferencia = ahora - inicio;

    let dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    let horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    let minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    let segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerHTML =
        `Llevamos juntos 💕<br>${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}
actualizar();
setInterval(actualizar, 1000);

/* ==========================
   MENSAJE Y POEMA
   ========================== */
let textoMensaje = `Eres lo mejor que me ha pasado ❤️ 
Gracias por estar conmigo, por apoyarme 🫶 y por todos los momentos que compartimos juntos. 
Cada día contigo es especial para mí y me hace muy feliz 👉👈 saber que te tengo a mi lado. 
Espero que sigamos creando muchos más recuerdos juntos, porque contigo todo se siente más bonito. 💖`;

let textoPoema = `Desde que llegaste a mi vida
todo se siente diferente,
los días son más bonitos 
y mi corazón más fuerte. 

Tu sonrisa ilumina mis momentos, 
tu voz calma mis pensamientos, 
y cada instante contigo se vuelve 
uno de mis recuerdos más bellos. 

Gracias por caminar a mi lado, 
por cada abrazo y cada mirada, 
porque contigo aprendí que el 
amor sí puede ser para siempre. ❤️`;

function escribirTexto(elemento, texto, velocidad = 40) {
    let i = 0;
    elemento.innerHTML = '<span id="texto"></span><span class="cursor">|</span>';
    let textoElemento = elemento.querySelector("#texto");

    function escribir() {
        if (i < texto.length) {
            textoElemento.innerHTML += texto[i] === "\n" ? "<br>" : texto[i];
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    escribir();
}

function mensaje() {
    let texto = document.getElementById("sorpresa");
    let foto = document.getElementById("foto");
    texto.style.display = "block";
    escribirTexto(texto, textoMensaje);
    foto.classList.add("latir");
}

function mostrarPoema() {
    let poema = document.getElementById("poema");
    poema.style.display = poema.style.display === "block" ? "none" : "block";
    escribirTexto(poema, textoPoema);
}

/* ==========================
   ESTRELLAS
   ========================== */
function crearEstrellas() {
    const cielo = document.getElementById("cielo-estrellas");
    cielo.innerHTML = "";

    for (let i = 0; i < 80; i++) {
        let estrella = document.createElement("div");
        estrella.classList.add("estrella");
        estrella.style.top = Math.random() * 100 + "%";
        estrella.style.left = Math.random() * 100 + "%";
        estrella.style.animationDuration = (Math.random() * 3 + 1) + "s";
        cielo.appendChild(estrella);
    }
}

/* ==========================
   MODO NOCHE
   ========================== */
function modoNoche() {
    const body = document.body;
    const boton = document.getElementById("botonModo");
    const cielo = document.getElementById("cielo-estrellas");

    body.classList.toggle("modo-noche");

    if (body.classList.contains("modo-noche")) {
        boton.innerHTML = "☀️ Volver a modo día";
        cielo.innerHTML = "";
        crearEstrellasFondo();
        dibujarConstelaciones();
    } else {
        boton.innerHTML = "🌙 Activar modo noche";
        cielo.innerHTML = "";
    }
}
/* ==========================
CORAZONES DETRÁS DEL CONTENIDO 
   ========================== */
const fondo = document.getElementById("corazones-fondo");

/* CORAZONES QUE CAEN AUTOMÁTICAMENTE */
setInterval(() => {
    let c = document.createElement("div");
    c.innerHTML = "❤️";
    c.style.position = "absolute";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-10px";
    c.style.fontSize = "20px";
    c.style.animation = "caer 5s linear";
    fondo.appendChild(c);
    setTimeout(() => c.remove(), 5000);
}, 800);

/* ========================================
   CORAZONES EXTRA (al presionar la foto) 
   ========================================*/
function corazonesExtra() {
    for (let i = 0; i < 10; i++) {
        let c = document.createElement("div");
        c.innerHTML = "💖";
        c.style.position = "absolute";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = Math.random() * 100 + "vh";
        c.style.fontSize = "25px";
        fondo.appendChild(c);
        setTimeout(() => c.remove(), 2000);
    }
}

/* ==========================
   GALERÍA DE IMÁGENES
   ========================== */
let indiceGaleria = 0;
const sliderGaleria = document.getElementById("slider");
const totalGaleria = sliderGaleria.children.length;
const indicadoresGaleria = document.getElementById("indicadores");

function crearIndicadoresGaleria() {
    indicadoresGaleria.innerHTML = "";
    for (let i = 0; i < totalGaleria; i++) {
        let punto = document.createElement("span");
        if (i === indiceGaleria) punto.classList.add("activo");
        indicadoresGaleria.appendChild(punto);
    }
}

function moverGaleria(direccion) {
    indiceGaleria += direccion;
    if (indiceGaleria < 0) indiceGaleria = totalGaleria - 1;
    if (indiceGaleria >= totalGaleria) indiceGaleria = 0;

    const ancho = sliderGaleria.children[0].offsetWidth;
    sliderGaleria.style.transform = `translateX(-${indiceGaleria * ancho}px)`;

    crearIndicadoresGaleria();

    if (indiceGaleria === totalGaleria - 1)
        mostrarSecreto("💌 ¡Sorpresa! Te amo muchísimo ❤️");
}

crearIndicadoresGaleria();

/* ==========================
   ESTRELLA FUGAZ
   ========================== */
function crearEstrellaFugaz() {
    const cielo = document.getElementById("cielo-estrellas");
    let fugaz = document.createElement("div");
    fugaz.classList.add("estrella-fugaz");
    let size = 3 + Math.random() * 4;
    fugaz.style.width = size + "px";
    fugaz.style.height = size + "px";
    fugaz.style.top = Math.random() * 50 + "%";
    fugaz.style.left = "-5%";
    cielo.appendChild(fugaz);

    fugaz.animate(
        [
            { transform: `translateX(0) translateY(0)`, opacity: 1 },
            { transform: `translateX(120vw) translateY(50vh)`, opacity: 0 }
        ],
        { duration: 2000 + Math.random() * 2000, easing: "ease-out" }
    );

    setTimeout(() => fugaz.remove(), 4000);
}
setInterval(crearEstrellaFugaz, 2500);

/* ==========================
   MENSAJE SECRETO
   ========================== */
function mostrarSecreto(msg) {
    const ventana = document.getElementById("ventana-secreta");
    const texto = document.getElementById("texto-secreto");
    texto.innerHTML = msg;
    ventana.style.display = "flex";
}
function cerrarSecreto() {
    document.getElementById("ventana-secreta").style.display = "none";
}

/* ==========================
   CONSTELACIONES
   ========================== */
const orion = [
    { x: 50, y: 30 },
    { x: 55, y: 40 },
    { x: 53, y: 50 },
    { x: 51, y: 55 },
    { x: 49, y: 60 },
    { x: 57, y: 65 }
];

const casiopea = [
    { x: 20, y: 10 },
    { x: 25, y: 15 },
    { x: 30, y: 10 },
    { x: 35, y: 15 },
    { x: 40, y: 10 }
];

function dibujarConstelaciones() {
    const cielo = document.getElementById("cielo-estrellas");
    [orion, casiopea].forEach(constelacion => {
        constelacion.forEach(coord => {
            let e = document.createElement("div");
            e.classList.add("estrella");
            e.style.top = coord.y + "%";
            e.style.left = coord.x + "%";
            let size = 4 + Math.random() * 3;
            e.style.width = size + "px";
            e.style.height = size + "px";
            e.style.opacity = 1;
            e.style.boxShadow = "0 0 10px white, 0 0 15px rgba(255,255,255,0.7)";
            cielo.appendChild(e);
        });
    });
}

/* ==========================
   ESTRELLAS DE FONDO
   ========================== */
function crearEstrellasFondo() {
    const cielo = document.getElementById("cielo-estrellas");
    for (let i = 0; i < 80; i++) {
        let e = document.createElement("div");
        e.classList.add("estrella");
        e.style.top = Math.random() * 100 + "%";
        e.style.left = Math.random() * 100 + "%";
        let size = 2 + Math.random() * 3;
        e.style.width = size + "px";
        e.style.height = size + "px";
        e.style.opacity = 0.6 + Math.random() * 0.4;
        e.style.boxShadow = "0 0 " + (5 + Math.random() * 5) + "px white";
        cielo.appendChild(e);
    }
}

const musica = document.getElementById("musica");
const botonMusica = document.getElementById("botonMusica");

function toggleMusica() {
    if (musica.paused) {
        musica.play();
        botonMusica.textContent = "Pausar música";
    } else {
        musica.pause();
        botonMusica.textContent = "Seguir reproduciendo";
    }
}

let pin = "";
const pinCorrecto = "0904"; // cambia aquí tu PIN

function agregarNumero(num){
    if(pin.length < 4){
        pin += num;
        actualizarCirculos();
    }

    if(pin.length === 4){
        verificarPin();
    }
}

function borrar(){
    pin = pin.slice(0,-1);
    actualizarCirculos();
}

function actualizarCirculos(){
    const puntos = document.querySelectorAll(".punto");
    puntos.forEach((p,i)=>{
        p.classList.toggle("lleno", i < pin.length);
    });
}

function verificarPin(){
    if(pin === pinCorrecto){

        const bloqueo = document.getElementById("bloqueo");

        explosionCorazones(); // 💖 explosión romántica

        bloqueo.classList.add("bloqueo-salida");

        setTimeout(()=>{

            bloqueo.style.display="none";
            document.getElementById("contenido").style.display="block";
            document.getElementById("musica").play();

        },900);

    }else{
        alert("PIN incorrecto 💔");
        pin="";
        actualizarCirculos();
    }
}

function animacionEntrada(){

    for(let i=0;i<40;i++){

        let corazon = document.createElement("div");
        corazon.innerHTML="💖";

        corazon.style.position="fixed";
        corazon.style.left=Math.random()*100+"vw";
        corazon.style.top=Math.random()*100+"vh";
        corazon.style.fontSize="30px";
        corazon.style.zIndex="9998";
        corazon.style.animation="caer 2s linear";

        document.body.appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },2000);

    }

}

function explosionCorazones(){

    for(let i=0;i<350;i++){

        let corazon = document.createElement("div");
        corazon.innerHTML="💖";

        corazon.style.position="fixed";
        corazon.style.left="50%";
        corazon.style.top="50%";
        corazon.style.fontSize="40px";
        corazon.style.pointerEvents="none"; 
        corazon.style.zIndex="10000";

        let x = (Math.random()-0.5)*1800;
        let y = (Math.random()-0.5)*1800;

        corazon.animate(
            [
                {transform:"translate(-50%,-50%) scale(1)", opacity:1},
                {transform:`translate(${x}px, ${y}px) scale(0.5)`, opacity:0}
            ],
            {
                duration:900,
                easing:"ease-out"
            }
        );

        document.body.appendChild(corazon);

        setTimeout(()=>{
            corazon.remove();
        },900);

    }

}