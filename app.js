// var firstname =prompt("Enter your firstname");
//  var lastname= prompt("enter your last name");
//  var fullname=(firstname+lastname);
//  alert(fullname);
//  var mob=prompt("enter you favroite mobile modle");
//  var len=mob.length;
//  document.write("my favriot phone is :"+mob +"<br> length of string is :"+len );
// var str="Pakistan";
// document.write("<br>  String is Pakistan");
//  var a=str.indexOf("n");
// document.write("the index number of n in Pakistan is :"+a);
// str2="hello world";
// document.write("<br> String num 2 is hello world"); 
// var b=str.indexOf("l");
// document.write("the index number of n in Pakistan is :"+b);
// var str="Pakistani";
//  document.write("<br>  String is Pakistani");
//  var c=str.indexOf("i");
//  document.write(" <br> the index number of i is :"+c);
// var city =("Hyderabad");
// document.write("<br>city"+city);
//  var after=city.replace("Hyderabad", "Islamabad");
//  document.write("<br>afterreplacement :"+after);
//  var message = ("Ali and Sami are best friends. They play cricket and football together");
//  console.log(message);
//   var after=message.replace("and","&");
//  console.log(after);
// var val="742";
// typeof val;
// "string"
// var num =Number(val);
// typeof num;
// "number"
// var str = prompt("enter your name");
// var res = str.toUpperCase();
// undefined
// console.log(res)
// var name="fatima";
//  var a=name.slice(0,1);
//  var a=a.toUpperCase();
//  var b=name.slice(1);
// var b=b.toLowerCase();
// console.log(a+b);
// var num=35.65;
// console.log(num);
// var a=Math.round(num);
// console.log(a);
// var username=prompt("enter you name");
// if (username=='ASCII64'){
//  console.log("your usernamre is valided");
// }
// else{
//     console.log("not valid");
// }

// var items=prompt('Enter you items');
// var firstchar=items.slice(0,1);
// var otherchar=items.slice(1);
// firstchar=firstchar.toUpperCase();
// otherchar=otherchar.toLowerCase();
// var items=firstchar+otherchar;
// console.log(items);
// var arr=['Biscuit','Cookies','Chips','apple pie','patties']
// for( var i=0; i<arr.length;i++){
//     if (arr[i]===items){
//         alert('Your items are found')
//     } else{ alert('Your item is not found');
// }
// }
// var str = 'University of Karachi.'
// var array = str.split("");
// document.write(array);
// var name="Pakistan";
// console.log(name);
// var after=name.slice(7);
// console.log("the last char in Pakistan is :"+after);
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
//   console.log(formatAMPM(new Date));

// var today = new Date();
// var milliseconds = today.getMilliseconds();

// var num=prompt("enter a number");
// console.log(num);
// var round=Math.round(num);
// console.log(round);
// var ceil=Math.ceil(num);
// console.log(ceil);
// var floor=Math.floor(num);
// console.log(floor);
// var num=prompt("enter a negative number ");
// console.log(num);
// var round=Math.round(num);
// console.log(round);
// var ceil=Math.ceil(num);
// console.log(ceil);
// var floor=Math.floor(num);
// console.log(floor);
// var a=prompt("enter a num for absolute value");
// console.log(a);
// var b=Math.abs(a);
// console.log(b);
// var a=Math.random(3);
// console.log(a);
// var headuser=prompt("enter a num ");
// var tailuser=prompt("enetr a num");
// var toss=Math.random()*2;
// var floor=Math.floor(toss);
// if(floor===0){
//     alert ("head" +headuser+" the value of coin is head");
// }else{
//     alert("tail"+tailuser+" the value of coin is tail");
// }
//  var a=Math.floor(Math.random() * 100) + 1; 
//  console.log(a);
// var w=prompt("enter your weight")
// var w=Math.floor(Math.random() * 55) + 1;
// console.log(w);
// var a=prompt("enter a num form 0 to 10");
// var a=Math.floor(Math.random() * 11); 
// if (a===4){
//     console.log("you are win");

// }else{
//     console.log("try again");
// }

// var a=new Date();
// b=a.toString();
// a.getMonth();
// var c=b.slice(0,3);
// var a="saturday";
// var b="sunday";
//  var day=prompt("enter a day");
//  if (day ==a,b) {
//    console.log("Good day");
//   } else {
//       console.log( "it's working day");
//   }
// function today(){
//     var a=new Date();
//     alert(a);
// }
// today();
// var firstname="fatima";
// var lastname="saleem";
// function fullname(){
//     alert(firstname+lastname);
// }
// fullname();
// function add(a=1,b=2,c=4){
//     return(a+b+c);
// }
//  var a =prompt ("enetr a num1");
//  var b =prompt ("enetr a num2");
//  var c =prompt ("enetr a num3");
// add();
// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1+num2
//     }
//     else if (opr==="-"){
//         return num1-num2
//     }
//     else if(opr==="*")
//     {
//         return num1*num2
//     }else{
//         return "incorrect"
//     }
// }
// var result = calc(5,"-",5);
// var result1=calc(4,"*",6);
// var result2=calc(4,"$",9);
// console.log(result);
// console.log(result1);
// console.log(result2);
// function sqr(a){
//     return  a*a}
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);
 
// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));
// function check_Palindrome(str_entry){
//     
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;

//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
  
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {

//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
 
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
   
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');
    
// sqr();

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);


// function longest_string(str_ara) {
//     var max = str_ara[0].length;
//     str_ara.map(v => max = Math.max(max, v.length));
//     result = str_ara.filter(v => v.length == max);
//     return result;
//   }
  
//   console.log(longest_string(['web development', 'graphic', 'web development and graphic','non',]))
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o'));
// function circle(radius)
// {
//     this.radius = radius;
//     this.area = function () 
//     {
//         return 3.14 * this.radius * this.radius;
//     };
//     this.Circumferenc = function ()
//     {
//         return 2*3.14*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area());
// console.log('Circumferenc =', c.Circumferenc());
