console.log('the house always wins!');

var idInput = document.getElementById('idInput');
var colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCard(){
    var card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card);
}