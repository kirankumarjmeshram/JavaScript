let main = document.querySelector('.main');
let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let list = document.querySelector('.list');

main.addEventListener('submit', (event)=> {
    event.preventDefault();
    if(!input.value.trim()) return;
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = ""
})