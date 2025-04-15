const card1 = document.querySelector('.card1'); //query selectors têm o ponto antes das coisas
const card2 = document.querySelector('.card2'); //query selectors têm o ponto antes das coisas
const button = document.querySelector('.button'); //query selectors têm o ponto antes das coisas
const ratings = document.querySelectorAll('.aval'); //query selector têm o ponto antes das coisas
console.log(card1, card2)

//declarar as variáveis aqui que estarei utilizando
// preciso esconder e aparecer card-1 -> declare card-1 -> um elemento só
// preciso esconder e aparecer card-2 -> declare card-2 -> um elemento só
// preciso levar em consideração que o button vai ser clicado -> declare button -> um elemento só
// preciso levar em consideração que o aval (que vai ser considerado um array, vai ser os elementos que vai ser usado pra dar nota)-> vários elementos



function submit() {
    card1.classList.add('hidden')
    card2.classList.remove('hidden')
}
button.addEventListener('click', function(){
    card1.classList.add('hidden')
    card2.classList.remove('hidden')
})

//button.addEventListener('click', submit)
//precisamos pensar em quantas ações teremos aqui nesse exercício (ações apenas por parte do usuário mesmo)
//ação 2 (apesar de estar fora de ordem no código) -> a pessoa clica no botão submit e a página muda pra outra (um card q era visivel fica hidden e vice-versa)


let selectedRating;

// [0, 1, 2, 3, 4]
function selectRating (value) {
    if (selectedRating) {
        ratings[selectedRating-1].classList.remove('active');
    }
    selectedRating = value;
    ratings[selectedRating-1].classList.add('active'); 
}
//ratings[value-1]
// precisamos de novo pensar em quantas ações teremos aqui nesse exercício (ações apenas por parte do usuário mesmo)
//ação 1 (apesar de estar fora de ordem no código) -> a pessoa vai selecionar uma nota (clicar) e depois vai apertar no botão embaixo e vai mudar de tela