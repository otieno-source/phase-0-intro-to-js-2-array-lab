// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(Broom) {
    return [...cats, "Broom"];
}

function prependCat(Arnold) {
    return ['Arnold', ...cats];
}

function removeLastCat(){
    let newcat = cats.slice(0, -1);
    return newcat;
}

function removeFirstCat(){
    let newcat = cats.slice(1);
    return newcat;
}
