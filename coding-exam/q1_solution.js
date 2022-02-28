// Leap calc from MS reference: https://docs.microsoft.com/en-us/office/troubleshoot/excel/determine-a-leap-year

// To determine whether a year is a leap year, follow these steps:

// 1 If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
// 2 If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
// 3 If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
// 4 The year is a leap year (it has 366 days).
// 5 The year is not a leap year (it has 365 days).


function checkLeap(data) {

    if (data < 0) return;

    let result = false

    if ((data % 4) === 0){
        if (data % 100 != 0) {
            result = true;            
        } else if (data % 400 === 0) {
            result = true;            
            };        
    };
    
    console.log(`Year ${data} is ${result? '':'not'}a leap year.`)
};

const input = Number(prompt('Enter year:'));

checkLeap(input);
