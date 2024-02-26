let input = document.querySelector('input')
let submitButton = document.querySelector('#submit')
let list = document.querySelector('ul')
let para = document.querySelector('#noTask')
let clearButton = document.querySelector('#clear')

submitButton.addEventListener('click', displayTask)
clearButton.onclick = () => list.remove();

function displayTask() {
    para.remove();
    var inputValue = input.value;

    var listItem = document.createElement('li');
    listItem.style.listStyle = 'none';
    listItem.style.height = '40px';
    listItem.style.fontSize = '20px';

    var checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox')
    checkBox.classList.add('checkBox')

    var span = document.createElement('span')
    list.appendChild(listItem);
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    span.textContent = inputValue;

    input.value = '';
    input.focus();

    checkBox.addEventListener ('click', function() {
        span.style.textDecorationLine = 'line-through';
        }
    )
}



