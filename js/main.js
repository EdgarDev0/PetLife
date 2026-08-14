const elementosDuvida = document.querySelectorAll(".duvida");

for (let i = 0; i < elementosDuvida.length; i++) {

    elementosDuvida[i].addEventListener("click", 
        function () {
            elementosDuvida[i].classList.toggle("ativa");
        }
    );

}