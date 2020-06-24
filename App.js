// CLASS 9

// alert("Hello, World!");
// var a = 5;
// var b = 10;
// var c = a + b;
// alert(c)


// alert("Welcome To Shopping Avenue");

// var a = 5;
// var b = 10;
// var c = b - a;
// console.log(c);

// var x = 5;
// var y = "Sarosh";
// var z = x + y;
// alert(z);

// var d = 5;
// var e = d++;
// console.log(d);

// var f = 15
// var g = f + ++f + f++ - f + ++f - ++f     
// //      15 + 16 + 16 - 17 + 18 - 19
// console.log(f)


// CLASS 10

// var a = prompt("Enter Your Age", "Your Age is");
// alert(a)

// var x = "Enter Value";
// var y = "Your Value is:"
// var a = +prompt(x,y);
// var b= a + 10;
// // console.log("The output is", + " " + b);
// document.write("The output is ", b);

// var age = +prompt("Enter your age");
//     if( age == 18){
//         alert("Permission Approved")
//     }
//     else if(age < 18){
//         alert("Permission Not Approved")
//     }
//     else{
//         alert("Permission Granted")
//     }

// var age = +prompt("Enter yout age");
// var gender = prompt("Enter your Gender")
//     if(age >= 18 && gender == "male"){
//         alert("You are allowed to Proceed")
//     }
//     else{
//         alert("Sorry.! But, You are Not Eligible to Proceed")
//     }

// var age = +prompt("Enter yout age");
// var gender = prompt("Enter your name")
//     if(age >= 18 || name == "Sarosh"){
//         alert("You are allowed to Proceed")
//     }
//     else{
//         alert("Sorry.! But, You are Not Eligible to Proceed")
//     }

// var a = "7"
//     if(a >= 8){
//         alert("True")
//     }
//     else{
//         alert("False")
//     }

// var x = 5;
// var y = 10;
// var a = 30;
// var b = 15;
//     if(x+y === a-b){
//         alert("Correct")
//     }
//     else{
//         alert("Incorrect")
//     }

// var a = 10;
//     if(a !== 15){
//         document.write("Correct.!")
//     }
//     else{
//         document.write("Incorrect.!")
//     }

// var percent = +prompt("Enter your percent")
//     if(percent >= 80 && percent <= 100){
//         alert("A+")
//     }
//     else if(percent >= 70 && percent <= 80){
//         alert("A")
//     }
//     else if(percent >= 60 && percent <= 70){
//         alert("B")
//     }
//     else if(percent >= 50 && percent <= 60){
//         alert("C")
//     }
//     else if(percent >= 40 && percent <= 50){
//         alert("D")
//     }
//     else{
//         alert("You are Fail")
//     }


// CLASS 11:

// var name = "Sarosh";
// var name1 = "Faheem";
// var name2= "ul-Haque";

// var candidates = ["Sarosh", "Faheem", "ul-Haque"]

// console.log(candidates[0])
// console.log(candidates[1])
// console.log(candidates[2])

// alert("Wellcome " + candidates[0])

// var names = []

// names[0] = "Sarosh";
// names[1] = "Faheem";

// console.log(names)

// EXAMPLE-1

// var candidates = ["Sarosh", "Faheem", "ul-Haque"]

// candidates.pop()       remove the last value from the array

// candidates.push("Hafsa", "Dawar") append the value in the array in the last

// candidates.shift()       remove the first value from the array

// candidates.unshift("Hafsa", "Dawar")   append the value in the array in the start

// candidates.splice(2, 0, "Urouj")  (Target, Status, Value(Append Or Replace))

// candidates.splice(2, 1, "Urouj")

// var copycandidates = candidates.slice(1,2)
// console.log(candidates)
// console.log(copycandidates)

// EXAMPLE-2

// var arr = ["cat", "dog", "tiger", "lion", ""];
// console.log(arr[2])

// var arr1= new Array("sarosh", "hafsa", "dawar");
// console.log(arr1);

// arr[4]= "Leopard";
// console.log(arr);

// arr.push("Panther");
// console.log(arr);

// arr.pop();
// arr.shift();
// arr.unshift("Deer");
// arr.splice(1,2,"Beer");
// console.log(arr);


// CLASS 12:

// for loop:
// {
// for(initialization ; condition ; increment/decrement)
// document.write(a)
// }

// for(var b=1; b <=10 ; b++){
// document.write(b + "<br>")

// var x;
// for(x = 1 ; x <= 10 ; x++){
//     console.log(x)
// }

// var x;
// for(x = 1 ; x <= 10 ; x= x+2){
//     console.log(x)
// }

// for(var i = 0 ; i < 6 ; i++){
//     console.log("Hello, World.!")
// }

// for(var s = 1 ; s <= 10 ; s++){
//     console.log("2" + "x" + s + "=" + 2*s + "<br>")
// }

// var names = ["Sarosh", "Hafsa", "Dawar", "Ali", "Rafai"];

// for(var n = 0 ; n < names.length ; n++){
//     console.log(names[n])
// }

// var cities = ["Karachi", "Islambad", "Lahore", "Quetta", "Peshawar"]

// for(var c = 0 ; c < cities.length ; c++){
//     if(cities[c] === "Karachi"){
//         alert(cities[c] + " " + "is a cleanenst city!")
//     }
// }

// for(var i = 1 ; i > 0 ; i++){
//     if(i === 10){
//         break
//     }
//     console.log("Hello")
// }

// for(var i = 0 ; i < 5 ; i++){
//     for(var j = 0 ; j < 3 ; j++){
//         console.log("Pakistan Zindabad")
//     }
// }

// var firstNames = ["Sarosh", "Hafsa", "Dawar"]
// var lastNames = ["Uzair", "Manal", "Umair"]
// for(var i = 0 ; i < firstNames.length ; i++){
//     for(var x= 0 ; x < lastNames.length ; x++){
//         console.log(firstNames[i]+ " " + lastNames[x])
//     }
// }

// for(var i = 0 ; i < 10 ; i++){
//     for(var j = 0 ; j < i ; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }

// var word = prompt("Enter Your Word");
// var check = "";

// for(var i = word.length - 1 ; i >= 0 ; i--){      
//     check += word[i]  
// }

// if(word === check){
//     console.log(word + " " + "is Palindrome Word")
// }

// var name = "sarosh";
// name = name.toUpperCase();
// console.log(name)

// var name = "sarosh";
// console.log(name.indexOf("a"))

// var val1= prompt("Enter your First Value")
// var val2= prompt("Enter your Second Value")
// var sign= prompt("Enter your Operator")

// console.log(val1+sign+val2)
// if(sign === "+"){
//     alert(val1+val2)
// }else if(sign === "-"){
//     alert(val1-val2)
// }else if(sign === "*"){
//     alert(val1*val2)
// }else if(sign === "/"){
//     alert(val1/val2)
// }else if(sign === "%"){
//     alert(val1/val2*100 + "%")
// }

// var equ = prompt("Enter Your Equation");
// var num = equ.length

// for(var i =0 ; i < num ; i++){
//     if(equ.slice(i,i+1) === "+"||equ.slice(i,i+1) === "-"||equ.slice(i,i+1) === "*"||equ.slice(i,i+1) === "/"||){
//         alert()
//     }
// }


// CLASS 13:

// for(var a= 1 ; a <= 100 ; a = a+10){
//     for(var b = a ; b < a+10 ; b++){
//     document.write(b + " ");
//     }
//     document.write("<br>");
// }

// var city = prompt("Enter Your City")
// var arr = ['Karachi', 'Islamabad', 'Peshawar', 'Lahore', 'Quetta', 'Skardu']
// for(var i = 0; i < arr.length ; i++){
//     if(arr[i] === city){
//         alert('City has Found')
//     break
//     }
//     else{alert('City Not Found')
//     break}
// }

// var city = prompt("Enter Your City")
// city = city.toUpperCase()               toUpperCase/toLowerCase             
// var arr = ['KARACHI', 'islamabad', 'peshawar', 'lahore', 'quetta', 'skardu']
// for(var i = 0; i < arr.length ; i++){
//     if(arr[i] === city){
//         alert('City has Found')
//     break
//     }
//     else{alert('City Not Found')
//     break}
// }

// var city = prompt("Enter Your City")

// var firstchar = city.slice(0,1);
// var otherchar = city.slice(1);

// firstchar = firstchar.toUpperCase()
// otherchar = otherchar.toLowerCase()

// var result = firstchar + otherchar;
// alert(result)

// var str = prompt("Enter some text");
// var numChars = str.length;
// for(var i = 0 ; i < numChars ; i++){
//     if (str.slice(i, i + 2) === "  "){
//         alert("Double spaces Raised");
//         break;
//     }
// }

// var text = "The New Yorker magazine doesnt allow the phrase World War II. They say it should be the Second World War." 
// for(var i = 0 ; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II"){
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//     console.log(text)
//     }
// }

// var text = "The New Yorker magazine doesnt allow the phrase World War II. They say it should be the Second World War." 
// var indxNum = text.indexOf('World War II');
// var firsttext = text.slice(0, indxNum);
// var replaceText = 'The Second World War'
// var replaceFrom = text.slice(indxNum+12)
// console.log(firsttext + replaceText + replaceFrom)

// var a = 'Sarosh'
// console.log(a.charAt(0))

// var para = "My name is Sarosh"
// var replace = para.replace("Sarosh", "Hafsa")      replace the First which it gets
// console.log(replace)

// var para = "My name is Sarosh, My name is Sarosh, "   replace it globally
// var replace = para.replace(/Sarosh/g, "Hafsa")
// console.log(replace)

// var num = 3.5
// var round = Math.round(num)    roundfigure the number
// console.log(round)

// var num = 3.2
// var ceil = Math.ceil(num)     bring fix number
// console.log(ceil)

// var num = 3.7
// var floor = Math.floor(num)    brings Minor number
// console.log(floor)

// Math.random()

// var headUser = prompt("Enter headsUser Name")
// var tailUser = prompt("Enter tailsUser Name")
// var toss = Math.random() * 2
// var floor = Math.floor(toss)
// if(floor === 0){
//     alert('Heads, ' + headUser + ' Wins the Toss')
// }else{
//     alert('Tails' + tailUser + 'Wins the Toss')
// }

// Number('10')    convert str in int
// parseInt('10')  convert str in int

// var num = 10
// console.log(num.toString())

// var num = 10.2346456345
// var ctrl = num.toFixed(1)
// console.log(ctrl)


// CLASS 14

// var a = new Date();
// console.log(a)

// var b = a.toString();
// console.log(b)

// var c = b.slice(0,3)
// console.log(c)

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thru", "Fri", "Sat"]
// var now = new Date();
// var theDay = now.getDay();
// var namesOfToday = dayNames[theDay];
// console.log(namesOfToday)

// function agecalc(){
// var dob = new Date(prompt("Enter your Date of Birth", "18th, May 1996"))
// var dobmili = dob.getTime();
// var today = new Date();
// var todaymili = today.getTime()
// var diff = todaymili - dobmili;
// var accuage = Math.floor(diff/(1000*60*60*24*30*12))
// console.log(accuage)
// }
// agecalc();

//  function greeting(greet){
//      console.log(greet)
//  }
//  greeting("Hello.!, World")

//  function add(a,b,c){
//     var f = 10;
//     var z = (a+b+c)
//     return z;
// }
// var g = add(2,6,4);

// var f = 15
// console.log(f)

// function foo(){
//     var a = "Hello"
//     console.log(a);
// }
// foo();

// function calc(num1, opr, num2){
//     if(opr === "+"){
//     return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     }
//     else if(opr === "*"){
//         return
//     }
//     else if(opr === "/"){
//         return num1 / num2
//     }else{
//         return "Incorrect Operator.!"
//     }
// }

// var result1 = calc(10,"/",5)
// var result2 = calc(5,"*",5)
// console.log(result1)
// console.log(result2)

// var name = "Hafsa"
// switch(name){
//     case "Sarosh":
//         alert("Hello Sarosh")
//         break
//     case "Hafsa":
//         alert("Hello Hafsa")
//         break
//     default:
//         alert("Hello.!, World")
//


// CLASS 15:

// VAR = b= 0;        while loop (Initialization,
// while(b<10){                 conditioning,
//     console.log(b);          printing,
//     b++;                     increment/decrement)  
// }

// var c = 0;             do-while  (Initialization,
// do{                            
//     console.log(c)                printing,
//     c++;                          increment/decrement, 
// }while(c<10);                     conditioning)

// function greeting(){
//     console.log('Hello.!, World')
// }

// function calculate(){
//     var a = 2 + 3
//     console.log(a)
// }

// function greetings(greet){
//     alert(greet)
// }

// function Clickbtn(greet){
//     alert('What the Fuck are you Doing.?')
// }

// function getName(){
//     var name = document.getElementById("nme");
//     console.log("Hello "+ name.value + ", How are You?")
// }

// name.value = ""

// function setName(){
//     var name = document.getElementById("xyz");
//     name.value = "Sarosh"
//     var para = document.getElementById("para");
//     para.innerHTML = "Hello.! This is Sarosh"
// }

// setName()

// CALCULATOR

// function getNumber(num){
//     var result = document.getElementById("rslt");
//     result.value += num;
// }

// function clearResult(){
//     var result = document.getElementById("rslt");
//     result.value = ""
// }

// function getResult(){
//     var result = document.getElementById("rslt");
//     result.value = eval(result.value)
// }

// CALCULATOR

as