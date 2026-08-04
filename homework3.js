// Написати функцію pow(x,y) яка буде приймати 2 цисла, перше це число яке ми будемо зводити у ступінь, друге у яку ступінь.

function pow(x,y) {
    multiply=1;
    for (let i=0; i<y; i++){
       multiply=multiply*x;
    }
    return `Результат ${x} у степені ${y} дорівнює ${multiply}`;
}

console.log(pow(2,5));
console.log(pow(3,8));