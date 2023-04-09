// Question No:1
// 
let num_1 , num_2;
num_1 = window.prompt("Input the First integer", "0");
num_2 = window.prompt("Input the Second integer","0");
if(parseInt(num_1, 10) >
parseInt(num_2, 10))
{
console.log("The larger of "+
num_1+ " and "+ num_2+ " is "+
num_1+ ".");
    
}
else
 if(parseInt(num_2, 10) >
parseInt(num_1, 10)); 


// Question No:2

let num=prompt("Enter a number");
let sign;

if(number > 0){
    
alert( "sign is +");
} 
else if(number < 0){
 alert(" the sign is - ");
}
else{ 

alert("the number is zero");
} 

// 
// Question No:3//
let num1=prompt("Enter the First Number");
let num2=prompt("Enter the Second Number");
let num3=prompt("Enter the Third Number");
let num4=prompt("Enter the Fourth Number");
let num5=prompt("Enter the Fifth Number");
let  max=num1; //assume the first number is largest
if(num2>max){
    max=num2;
}
if(num3>max){
    max=num3;
}
if(num4>max){
    max=num4;
}
if(num5>max){
    max=num5;
}
console.log( "largest number is:"+ max);

// Question No:4
// 
for (let i=0; i<=15; i++){
    if(i % 2 === 0){ 
        console.log(i + "is even");
    } 
    else{
        console.log(i +"is odd");
    } 

}
// 
// Question No:5
//  
function computeGrade(marks){
let total=0;
for (let i=0; i<marks.length;i++){
total +=marks[i];
}
let average=total/marks.length;
if(average<60){
return"F";
}
else if(average<70){
return"D"
}
if(average<60){
    return"F";
    }
    else if(average<70){
    return"D"
    }
     else if(average<80){
        return"C";
        }
        else if(average<90){
        return"B"
        }
     else{
return"A"
     } 
}
Example:
let marks=[75,90,68,90,89];
let grade=computeGrade(marks);
console.log("The average grade is:"+ grade)

//Question no:6

for (let i = 1;i<=100;i++){
if(i % 3 ===0 && i % 5 === 0){
console.log("FizzBuzz");
}
else 
if (i % 3 === 0){
console.log("Fizz");
}
else 
if(i % 5 === 0){
    console.log("Buzz");
}