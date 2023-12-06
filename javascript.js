document.getElementById('currentYear').textContent = new Date().getFullYear();

document.getElementById('alertButton').addEventListener('click', function() {
    alert('Hello world!');
});

document.getElementById('id').onmouseover = () => {
    document.getElementById('id').innerText = 'Please!';
};

document.getElementById('id').onmouseleave = () => {
    document.getElementById('id').innerText = 'Click Me!';
};
