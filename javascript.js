document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('alertButton').addEventListener('click', function() {
    alert('Thanks!');
});

document.getElementById('alertButton').onmouseover = () => {
    document.getElementById('alertButton').innerText = 'Please!';
};

document.getElementById('alertButton').onmouseleave = () => {
    document.getElementById('alertButton').innerText = 'Click Me!';
};

let count = 1;

document.getElementById('btn-counter').onclick = () => {
    count = count + 1;
    document.getElementById('txt-counter').innerHTML = 'Number: ' + count;


    if (count % 2 === 0) {
        
        document.getElementById('txt-counter').classList.add('even');
        document.getElementById('txt-counter').classList.remove('odd');
    } else {
        
        document.getElementById('txt-counter').classList.add('odd');
        document.getElementById('txt-counter').classList.remove('even');
    }
};

const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {

    const listItem = document.createElement('li');
    
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';

    numbersList.appendChild(listItem);
}
