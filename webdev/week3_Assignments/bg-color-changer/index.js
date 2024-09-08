

function clickHandler(color){
    document.body.style.backgroundColor = color;
}

function addCustomColor() {
    const color = document.getElementById('input').value;
    if (color.trim() === '') {
        alert('Please enter a color name or hex code.');
        return;
    }
    const newButton = document.createElement('button');
    newButton.className = 'btn-class';
    newButton.style.backgroundColor = color;
    newButton.textContent = color.charAt(0).toUpperCase() + color.slice(1);

    newButton.onclick = function() {
        clickHandler(color);
    }

    document.querySelector('.color-panel').appendChild(newButton);

    document.getElementById('input').value = "";
}
 
