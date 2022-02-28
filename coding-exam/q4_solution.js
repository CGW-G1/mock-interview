function minimumValue(data) {

    // 1
    if (data.length > 1) {        
    } else {
        console.log('Need at least 1 element in array');
        return;
    };

    // 2
    let result = data[0];
    for (xx=0; xx < data.length; xx++) {
        if (result > data[xx+1]) {
            result = data[xx+1];
        };        
    };

    console.log(`The minimum value in the array is ${result}`);

};

let testVal = [1, 11, 213, 78, 99, 9 , 5555, 15, 0];

minimumValue(testVal);