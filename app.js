// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1) Write a JS progrmaa that accepts two numbers in two prompts and displays the larger one in the cosoloe.log()
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////



let usrVal1 = +prompt("Enter First Number Value ...");
let usrVal2 = +prompt("Enter Second Number Value ...");


if (usrVal1 > usrVal2) {
    console.log(`First Prompt User Value is Greater ... ${usrVal1}`);
}
else if (usrVal2 > usrVal1) {
    console.log(`Second Prompt User Value is Greater ... ${usrVal2}`);
    
}
else{
    console.log(`Value IS Equal  ${usrVal1} ${usrVal2}`);
}



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2) Write a JS conditional statement to find a sign of a number . Display an alert box with the specifies sign .
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let userNumInput = +prompt("Enter First Number Value ...");


// if (userNumInput > 0) {
//     alert(`User Input Number is Positive ... ${userNumInput}+` )
// }
// else if (userNumInput < 0 ) {
//     alert(`User Input Number is Negative ... ${userNumInput}` )
    
// }
// else{
//     alert(`Number is Zero . ${userNumInput}`)
// }



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3) Write a JS program that accepts five numbers in five prompts and displays the larger one in the console .
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let userInp1 = prompt("Enter Value 1 ...");
// let userInp2 = prompt("Enter Value 2 ...");
// let userInp3 = prompt("Enter Value 3 ...");
// let userInp4 = prompt("Enter Value 4 ...");
// let userInp5 = prompt("Enter Value 5 ...");

// console.log(Math.max(userInp1 , userInp2 , userInp3 , userInp4 , userInp5));



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q NO : 4)  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for(let i = 0 ; i <= 15 ; i++) {

//     let findEven = i % 2 === 0 ; 

//     if (findEven) {
//         console.log(`${i} is Even `);
//     }
//     else if (!findEven) {
//         console.log(`${i} is Odd `);

//     }
// }




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Q No : 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :

// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////



// let totalMarks = 500 ; 

// alert("Total Marks is 500 \n and Total Subjects is 5 (Five) \n Put Your Obtained Marks in Given Subjects ");


// let EnglishAMarks = +prompt("Enter English Marks ...");
// let MathMarks = +prompt("Enter Math Marks ...");
// let UrduMarks = +prompt("Enter Urdu Marks ...");
// let IslamiatMarks = +prompt("Enter Islamiat Marks ...");
// let SindhiMarks = +prompt("Enter Sindhi Marks ...");


// let obtMarks = (EnglishAMarks + MathMarks + UrduMarks + IslamiatMarks + SindhiMarks) ;

// // console.log(obtMarks);

// let percentage = (obtMarks / totalMarks ) * 100 ; 

// console.log(percentage);


// if (percentage < 100 && percentage > 90) {
//     alert(`Grade A ${percentage}`);
// }
// else if (percentage < 90 && percentage > 80 ) {
//     alert(`Grade B ${percentage}`);
// }
// else if (percentage < 80 && percentage > 70) {
//     alert(`Grade C ${percentage}`);
// }
// else if (percentage < 70 && percentage > 60) {
//     alert(`Grade D ${percentage}`);
// }
// else{
//     alert(`You are Fail 🥺 ...  ${percentage}`);
// }





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for(let i = 0 ; i < 100 ; i++){
//     if ((i % 3 === 0) && (i % 5 === 0)) {
    
//         // console.log("Fizz");
//         document.write(`Fizz <br/> ${i}`);
//     }
//     else if (i % 3 === 0) {
//         // console.log("Buzz");
//         document.write(`Buzz <br/> ${i}`);

        
//     }
//     else if (i % 5 === 0) {
//         // console.log("FizzBuzz");
//         document.write(`FizzBuzz <br/> ${i}`);
//     }

//     else{
//         console.log(i);
//     }
// }








// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////


// for(let i = 0 ; i <= 4 ; i++){
    
    
//     for(let j = 1 ; j <= i ; j++){
//         document.write("*")
//     }
    
//     document.write("* <br/>");
// }

