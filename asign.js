// 1.  --------------------one-----------------
/*
for(let i = 1000; i >= 300; i--){
    console.log(i);
}
*/
// 2. -------------------two-----------------------

// ---------Find Even Number----------
/*
for(let i = 1; i <=1000; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
*/
// -----------Find Odd Number---------
/*
for(let i = 1; i <=1000; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}
*/

// 3. ------------------Three----------------
// Find the number divisible by 7 between 1 and 1000
/*
for(let i = 1; i<=1000; i++){
    if(i % 7 == 0){
        console.log(i);
    }
}
*/

// 4. -------------Four-----------------
// Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11
/*
for(let i =1; i <= 100; i = i +3){
    console.log(i);
        if(i % 11 == 0){
            break;
        }
}
*/
// 5. ---------------------Five-----------------
// Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4
/*
for(let i =1; i<=500; i++){
    if(i % 3 == 0 && i % 4 == 0){
        console.log(i)
    }
}
*/
// 6. ---------------------Six-----------------
// Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operator twice.

//----------- using decrement operator------------------
/*
let initial_value = 1000;
let  decrement_rotate_time = 1000-50;

for(initial_value; initial_value > decrement_rotate_time; initial_value--){
    console.log(initial_value);
    if(initial_value == decrement_rotate_time){
        break;
    }
}
*/

// -----------------using increment operator--------------
/*
let initial_value = 1000;
let  increment_rotate_time = 1000+50;

for(initial_value; initial_value < increment_rotate_time; initial_value++){
    console.log(initial_value);
    if(initial_value == increment_rotate_time){
        break;
    }
}
*/
