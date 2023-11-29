const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0

setaAvancar.addEventListener('click', function() {
    if(imagemAtual === imagens.length - 1){
        return;
    }
    imagemAtual++

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()

})

setaVoltar.addEventListener('click', () => {
    if(imagemAtual === 0) {
        return;
    }
    imagemAtual--

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

function mostrarImagem() {
    imagens[imagemAtual].classList.add("mostrar")
}

function esconderImagemAberta() {
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarOuEsconderSetas() {
    const naoEhAPrimeiroaImagem = imagemAtual !== 0
    if(naoEhAPrimeiroaImagem) {
        setaVoltar.classList.remove("opacidade")
    }else {
        setaVoltar.classList.add("opacidade")
    }

    const chegouUltimaImagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1

    if(chegouUltimaImagem) {
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade")
    }
}