
const nameElement = document.getElementById('name');

const updateButton = document.getElementById('update-button');

const nameInput = document.getElementById('name-input');

updateButton.addEventListener('click', () => {

    const name = nameInput.value;

    nameElement.textContent = name;
});

const greenButton = document.getElementById('green-button');

greenButton.addEventListener('Click', () => {
   
    const tag = tag.value;
    
    document.body.style.background = 'green';
});