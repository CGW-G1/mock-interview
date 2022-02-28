function emulateSubstring(a,b,c) {

    // 1
    let textArray = [...a];

    // 2
    if (b > c) {
        bb = parseInt(c);
        cc = parseInt(b);
    } else if (b < 0){ // 4
        bb = 0;
        cc = parseInt(c);        
    } else {
        bb = parseInt(b);
        cc = parseInt(c);
    };

    // 3
    if ((cc + 1) > textArray.length) {
        cc = (textArray.length - 1);
    };
    
    let result = '';
    for (xx=bb; xx < cc; xx++ ) {
        result = result + textArray[xx];
    };
        
    console.log(`Answer: ${result}`);
    console.log(`Compare with: ${a.substring(b, c)}`);
};



const input1 = prompt('Enter a string');
const input2 = prompt('Enter number A');
const input3 = prompt('Enter number B');

emulateSubstring(input1, input2, input3);

// emulateSubstring('i am a fish', 2, 10);


