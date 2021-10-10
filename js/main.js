window.addEventListener('scroll', function(){
    let animacion = document.getElementById('animado');
    let posicionObjt1 = animacion.getBoundingClientRect().top;
    let tamanoPantalla = window.innerHeight/3.5;
    console.log(posicionObjt1)

    if(posicionObjt1 < tamanoPantalla){
        document.getElementById("barra1").classList.toggle("final1");
        document.getElementById("barra2").classList.toggle("final2");
        animacion.style.animation = 'mover 1s ease-auto'
    }
})