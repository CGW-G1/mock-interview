function nameEntries() {

    let dataArray=[];
    // 1
    let input1 = prompt('Enter first name');
    let input2 = prompt('Enter last name'); 

    dataArray.push({
        firstname: input1,
        lastname: input2
    });

    let cont = true;
    let input3;
    let inputA;
    let inputB;

    while (cont) {
        
        // 2
        input3 = prompt('Would you like to enter another name?');

        if (input3 == 'yes') {
            console.log('continue');
            inputA = prompt('Enter first name');
            inputB = prompt('Enter last name');
            dataArray.push({
                firstname: inputA,
                lastname: inputB
            });

        } else if (input3 == 'no') {
            cont = false;
        };
    };

    // 3
    for (xx=0; xx < dataArray.length; xx++) {
        console.log(`The first name is ${dataArray[xx].firstname}, the last name is ${dataArray[xx].lastname}.`);
    };


    console.log(dataArray);

};
nameEntries();
