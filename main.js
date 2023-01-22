const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');

button.addEventListener('click', newFunc);
input.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        newFunc();
    }
})

let calculate = 0;
function newFunc() {
    if (input.value != '') {
        calculate++;
        let deleteButton = document.createElement('div');
        let textButton = document.createTextNode('Sil');
        let finishButton = document.createElement('div');
        const innerText = document.createTextNode('Hazir');
        finishButton.appendChild(innerText);
        finishButton.classList.add('finishButton');
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.appendChild(textButton);
        let newText = document.createElement('p');

        newText.setAttribute('class', 'new')
        newText.innerText = calculate + ')' + input.value;
        contentDiv.appendChild(newText);
        newText.appendChild(deleteButton);
        newText.appendChild(finishButton);
        input.value = '';


        deleteButton.addEventListener('click', remove);
        function remove() {
            calculate--;
            newText.remove();
        }
        finishButton.addEventListener('click', function () {
            newText.classList.toggle('line-text');
        })
    }
}