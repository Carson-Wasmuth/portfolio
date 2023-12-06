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
