let element = document.querySelector("#numberInput");
element.addEventListener("input", function(){
    let numValue = Number(element.value);

    if (numValue <= -10 || numValue >= 10 ){
        alert("The number should be between -10 and 10");
    }
})

let fruit = {
    fruitName : 'Apple',
    fruitColor : 'Red',
    fruitTaste : 'Sweet'
};

let fruitNameElement = document.querySelector("#fruitName");
let fruitColorElement = document.querySelector("#fruitColor");
let fruitTasteElement = document.querySelector("#fruitTaste");

fruitNameElement.innerHTML = `Name: ${fruit.fruitName}`;
fruitColorElement.innerHTML = `Name: ${fruit.fruitColor}`;
fruitTasteElement.innerHTML = `Name: ${fruit.fruitTaste}`;