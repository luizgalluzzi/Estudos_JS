// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

// Funcoes
function handleKeyUp(e) {
    if(e.key === 'Enter') {
        const newLi = document.createElement('li'); //cria uma nova lista
        newLi.innerHTML = input.value; //acrescenta o novo valor
        lista.appendChild(newLi); 
        input.value = ''; //zerar o campo
    }
}

// Eventos
input.addEventListener('keyup',handleKeyUp);

