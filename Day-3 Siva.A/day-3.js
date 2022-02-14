// Table of 5 

for(i=1; i<=10;){                     //For loop
    val = i*5
    console.log(val)
    i++
}

// marks of 5 subjects

var sub1= 90;
var sub2= 85;
var sub3= 95;
var sub4= 80;
var sub5= 97;

// percentage and grade

var total=sub1+sub2+sub3+sub4+sub5;    //Total

var per=total/5;                       //Percentage

console.log(per);

if (per>90){                           // Grade
    console.log("O grade")
}
else if (per>80){
    console.log("A++ grade")
}
else if (per>70){
    console.log("A grade")
}
else if (per>60){
    console.log("B grade")
}
else{
    console.log("FAIL")
}