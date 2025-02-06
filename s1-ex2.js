function add(nb1, nb2){
    console.log("Addition: " + (nb1 + nb2));
}

function sub(nb1, nb2){
    console.log("Soustraction: " + (nb1 - nb2));
}

function mult(nb1, nb2){
    console.log("Multiplication: " + (nb1 * nb2));
}

function div(nb1, nb2){
    console.log("Division: " + (nb1 / nb2));
}

function calc(nb1, nb2){
    console.log("--Resultat pour--");
    add(nb1, nb2);
    sub(nb1, nb2);
    mult(nb1, nb2);
    div(nb1, nb2);
}

let x = (Math.random() * 100);
let y = (Math.random() * 100);

calc(x, y);