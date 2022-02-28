function emulateRemainder(a,b) {

    let result = a - (parseInt(a / b) * b);

    console.log(`${a} % ${b} = ${result}`);

    console.log(a%b);

};



const input1 = prompt('Enter number A');
const input2 = prompt('Enter number B');

emulateRemainder(input1, input2);


